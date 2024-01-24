import React from 'react';
import Link from "next/link";

function Form({type, post, setPost, submitting, handleSubmit}) {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">
                    {type} Post
                </span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share amazing prompts with the world,
                and let your imagination run wild with
                AI-powered platform.
            </p>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full max-w-2xl mt-10 flex flex-col gap-7 glassmorphism">
                <label>
                    <span className="text-base font-satoshi text-gray-700 font-semibold">
                        Your AI Prompt
                    </span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) => {
                            setPost({
                                ...post,
                                prompt: e.target.value,
                            });
                        }}
                        required={true}
                        className="form_textarea"
                        placeholder="Write your prompt here..."
                    />
                </label>
            </form>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="w-full max-w-2xl mt-10 flex flex-col gap-7 glassmorphism">
                <label>
                    <span className="text-base font-satoshi text-gray-700 font-semibold">
                        Tag{' '}
                        <span className="font-normal">
                            (#programming, #ai, #gpt4, #product, #smm)
                        </span>
                    </span>
                    <textarea
                        value={post.tag}
                        onChange={(e) => {
                            setPost({
                                ...post,
                                tag: e.target.value,
                            });
                        }}
                        required={true}
                        className="form_input"
                        placeholder="#tag..."
                    />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? `${type}...` : type}
                    </button>
                </div>

            </form>
        </section>
    );
}

export default Form;
