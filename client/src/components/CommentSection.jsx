import { Alert, Button, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CommentSection({ postId }) {
  const [comment, setComment] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [commentError, setCommentError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) return;
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        console.log("hi");
      } else return setCommentError(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(postId, currentUser._id);
  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex gap-1 items-center my-5 text-gray-500 text-sm">
          <p>Signed in as: </p>
          <img
            src={currentUser.profilePicture}
            alt=""
            className="w-5 h-5 object-cover rounded-full"
          />
          <Link
            to={"/dashboard?tab=profile"}
            className="test-xs text-cyan-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          You must be signed in to comment.
          <Link to={"/sign-in"} className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-teal-500 p-3 rounded-md"
        >
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="3"
            placeholder="Add a comment..."
          ></Textarea>
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500 ">
              {200 - comment.length} Characters Remaining
            </p>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Submit
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
    </div>
  );
}