const useTypingAnimtion = () => {
  if (typeof window !== "undefined") {
    const searchEle = document.getElementById("search");

    const string1 = "Amet nulla non aliqua excepteur nisi.";
    const string2 = "Enim eu veniam consectetur incididunt.";
    const string3 = "Reprehenderit quis et est tempor aute.";

    const delay = (time) => {
      return new Promise((r) => setTimeout(r, time));
    };

    const delay2 = (time) => {
      return new Promise((r) => setTimeout(r, time));
    };

    const typeAnimation = async (rtl, text, time) => {
      let placeholder;
      for (let i = 1; i <= text.length; i++) {
        placeholder = text.slice(0, rtl ? -i : +i);
        await delay(time);
        searchEle.setAttribute("placeholder", placeholder);
      }
      await delay2(1000);
    };

    const main = async () => {
      await typeAnimation(false, string1, 100);
      await typeAnimation(true, string1, 100);
      await typeAnimation(false, string2, 100);
      await typeAnimation(true, string2, 100);
      await typeAnimation(false, string3, 100);
      await typeAnimation(true, string3, 100);
      main();
    };

    main();
  }
};

export default useTypingAnimtion;
