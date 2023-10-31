import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useMediaQuery from "../hooks/useMediaQuery";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const ContactSection = ({ dict }) => {
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const {
    register,
    reset,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  const onSubmit = async (e) => {
    const data = {
      name: e.name,
      email: e.email,
      phone: e.phone,
      query: e.query,
    };
    setLoading(true);
    console.log("form.current", form.current);
    console.log("dict", dict);
    emailjs
      .sendForm(
        "service_8pkg8zb",
        "template_t6pzclc",
        form.current,
        "_n8rkPismoc7igbd0"
      )
      .then(
        (result) => {
          if (dict.lang === "English") {
            reset();
            alert("Your request has been sent successfully!");
            setLoading(false);
          } else {
            reset();
            alert("تم ارسال طلبك بنجاح.");
            setLoading(false);
          }
        },
        (error) => {
          if (dict.lang === "English") {
            alert("Something Went Wrong Try Again Later!");
            setLoading(false);
          } else {
            alert("حدث خطأ ما حاول مرة أخرى لاحقًا!");
            setLoading(false);
          }
        }
      );

    // let url = "";
    // let message =
    //   "New Interaction from your Website:%0a%0aName     = " +
    //   e.name +
    //   "%0aEmail ID = " +
    //   e.email +
    //   "%0aPhone    = " +
    //   e.phone +
    //   "%0aQuery     = " +
    //   e.query;
    // if (isAboveSmallScreens) {
    //   url = `https://web.whatsapp.com/send?phone=+919962262253&text=${message}&app_absent=0`;
    // } else {
    //   url = `https://api.whatsapp.com/send?phone=+919962262253&text=${message}&app_absent=0`;
    // }
    // route.push(url);
    // window.push(url);
  };

  return (
    <section
      id="contact"
      className="min-h-screen  grid grid-cols-1 lg:grid-cols-2 pt-[100px]"
    >
      <div className="mx-10 lg:ml-20">
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 mb-2">
          {dict.contactInfo}
        </p>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {dict.contactContent}
        </h1>
        <div className="h-1 w-20 bg-magic-potion rounded"></div>

        <form
          ref={form}
          target="_blank"
          // onSubmit={handleSubmit(onSubmit)}
          action=""
          method="POST"
        >
          <div className="flex flex-col justify-center font-montserrat mt-10">
            <label className="text-gray-500 font-semibold">
              {dict.contactName} :
              <input
                className="w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2"
                type="text"
                name="Name"
                placeholder={dict.contactNameHolder}
                {...register("name", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </label>
            <label className="text-gray-500 font-semibold">
              {dict.contactEmail} :
              <input
                className="w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2"
                type="text"
                placeholder={dict.contactEmailHolder}
                {...register("email", {
                  required: true,
                  maxLength: 60,
                })}
              />
            </label>
            <label className="text-gray-500 font-semibold">
              {dict.contactPhone} :
              <input
                className="w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2"
                type="text"
                placeholder={dict.contactPhoneHolder}
                {...register("phone", {
                  required: true,
                  maxLength: 20,
                })}
              />
            </label>
            <label className="text-gray-500 font-semibold">
              {dict.contactQuery} :
              <textarea
                className="w-full rounded mt-2 mb-2 md:mb-5 md:rounded-lg bg-gray-100 text-sm font-normal placeholder-gray-500 px-5 py-2"
                type="text"
                placeholder={dict.contactQueryHolder}
                {...register("query", {
                  required: true,
                  maxLength: 80,
                })}
              />
            </label>
            {!loading ? (
              <button
                className="rounded border-2 border-magic-potion mb-3 md:rounded-full text-magic-potion bg-white px-8 py-1.5"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                {dict.submit}
              </button>
            ) : (
              <button className="rounded border-2 border-magic-potion mb-3 md:rounded-full text-magic-potion bg-white px-8 py-1.5">
                <div
                  role="status"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="my-5 mx-10 lg:mx-20 lg:my-0">
        <div className="p-2.5 bg-magic-potion/20">
          <div className="overflow-hidden cursor-pointer rounded-sm relative group z-0 before:absolute before:w-full before:max-w-[600px]  before:h-full">
            <img
              alt="House Keeping folded towels"
              className="object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/cottonbro-studio.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
