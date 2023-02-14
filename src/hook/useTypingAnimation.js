const useTypingAnimtion = () => {
  if (typeof window !== "undefined") {
    const ele = document.getElementById("search");

    const string1 = "Amet nulla non aliqua excepteur nisi.";
    const string2 = "Enim eu veniam consectetur incididunt.";
    const string3 = "Reprehenderit quis et est tempor aute.";

    const delay = (time) => {
      return new Promise((r) => setTimeout(r, time));
    };

    const typeAnimation = async (rtl, text, time) => {
      let placeholder;
      for (let i = 1; i <= text.length; i++)
        placeholder = text.slice(0, rtl ? -i : +i);
      await delay(time);
      ele.setAttribute("placeholder", placeholder);
    };

    const main = async () => {
      await typeAnimation(false, string1, 150);
      await typeAnimation(true, string1, 150);
      await typeAnimation(false, string2, 150);
      await typeAnimation(true, string2, 150);
      await typeAnimation(false, string3, 150);
      await typeAnimation(true, string3, 150);
    };

    main();
  }
};

export default useTypingAnimtion;
