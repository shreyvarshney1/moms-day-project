import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import { cormorant } from "@/components/fonts";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 w-3/4">
      <h1 className={`text-5xl font-medium mb-8 ${cormorant.className}`}>Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Image
          src={placeholder}
          height={1000}
          width={1000}
          alt="placeholder"
          className="hover:mix-blend-multiply"
        />

        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-[#dce4e7] p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-[#dce4e7] p-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full border border-[#dce4e7] p-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white text-sm px-6 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
