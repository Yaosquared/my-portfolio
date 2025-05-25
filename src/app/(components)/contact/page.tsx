"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <article
      id="contact"
      className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto my-10 md:my-24 text-center"
    >
      <Card>
        <CardHeader>
          <CardTitle>
            <Title
              text="Contact Me"
              className="flex flex-col items-center justify-center rotate-2"
            />
          </CardTitle>
          <CardDescription className="text-base lg:text-lg">
            I&apos;m always interested in hearing about new learning
            opportunities, collaborating on coding projects, or simply
            connecting on social platforms.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.95,
              rotate: "2.5deg",
            }}
          >
            <Link target="_blank" href="mailto:marioyaoyao14@gmail.com">
              <Button variant="default" className="text-base p-6">
                Email
              </Button>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </article>
  );
};

// const Contact = () => {
//   return (
//     <article
//       id="contact"
//       className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto my-10 md:my-24 text-center"
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle>
//             <Title
//               text="Contact Me"
//               className="flex flex-col items-center justify-center rotate-2"
//             />
//           </CardTitle>
//           <CardDescription className="text-base lg:text-lg">
//             I&apos;m always interested in hearing about new learning
//             opportunities, collaborating on coding projects, or simply connect
//             on social platforms.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form className="border rounded-md flex flex-col p-8 gap-3">
//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-left font-medium">
//                 Email:
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 className="border rounded-md p-2"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="message" className="text-left font-medium">
//                 Message:
//               </label>
//               <textarea name="message" className="border rounded-md p-2" />
//             </div>
//             <Button type="submit" className="w-full">
//               Send
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </article>
//   );
// };

export default Contact;
