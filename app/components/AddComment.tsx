"use client";
import { useForm } from "react-hook-form";

interface Props {
  postId: string;
}

const AddComment = ({ postId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { name, email, comment } = data;

    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ name, email, comment, postId }),
    });
    if (!res.ok) {
      console.log("Failed to add comment");
      return;
    }

    reset();
  };

  return (
    <div className="mt-14">
      <p>
        Leave a comment <span role="img">💬</span>
      </p>
      <form
        className="flex flex-col border dark:border-purple-950 shadow-sm rounded px-8 pt-6 pb-6 mb-10"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <label>Name</label>
        <input
          {...register("name", { required: true })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.name && (
          <p className="text-red-600 text-xs">Name is required.</p>
        )}
        <label>
          Email{" "}
          <span className="text-xs">(Your email will not be published!)</span>
        </label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.email && (
          <p className="text-red-600 text-xs">
            Please enter a valid email address.
          </p>
        )}
        <label>Comment</label>
        <textarea
          {...register("comment", { required: true, minLength: 2 })}
          className="mb-4 py-1 bg-amber-100 dark:bg-slate-900"
        />
        {errors.comment && (
          <p className="text-red-600 text-xs">Minimum 2 characters.</p>
        )}
        <input
          className={`cursor-pointer bg-purple-500 text-white rounded py-2 hover:bg-purple-600 ${
            isSubmitting ? "opacity-50" : ""
          }`}
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddComment;
