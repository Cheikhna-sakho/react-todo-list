export const activeClass = (ref) => {
    // console.log(ref.current);
    const isActive = ref.current.className.split(" ").find(cl => cl === "active");
    console.log(isActive);
    if (!isActive) {
        ref.current.className += " active";
    }
    return;
}
export const disableClass = (ref) => {
    const refClass = ref.current.className;
    const newCl = refClass.split(" ").filter(cl => cl !== "active").join(" ");
    ref.current.className = newCl; 
    return;
}