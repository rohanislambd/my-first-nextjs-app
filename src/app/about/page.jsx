import Image from "next/image";
import React from "react";



export const metadata = {
  title: "About pagge",
  description: "hello ",
}

const aboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>

      <Image src="/nature.jpg" width={300} height={300} alt="nature" />


    <Image src="https://images.unsplash.com/photo-1788270083262-55c5df22ed45" width={300} height={300} 
    alt="fire" ></Image>
    </div>
  );
};

export default aboutPage;
