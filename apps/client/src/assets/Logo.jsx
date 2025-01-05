import React from "react";
import { Icon } from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 37">
        <path
          fill="#3182CE"
          d="M33 6.442c-1.194.503-2.22 1.331-3.008 1.967-.466.375-.848.683-1.132.818-.749-1.43-4.342-4.238-8.65-2.823-16.631 5.465-.777 21.763 8.613 27.719A18.877 18.877 0 0 1 18.767 37C8.402 37 0 28.717 0 18.5S8.402 0 18.767 0A18.837 18.837 0 0 1 33 6.442Z"
        />
      </svg>
    </Icon>
  );
};

export default Logo;
