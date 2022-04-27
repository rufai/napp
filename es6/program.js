const variables = process.argv.slice(2);
/**
    ' | &apos;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;
*/
const tagArray = ["'", '"', "<", ">", "&"];
const tags = {
  "'": "&apos;",
  '"': "&quot;",
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
};
const html = (a, ...e) => {
  const username = escape(e[0])
  const escapedCommentString = escape(e[1])
 
  return `<b>${username} says</b>: "${escapedCommentString}"`;
};

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function escape(a){
    return a.split("")
    .map((element) => {
      if (tagArray.includes(element)) {
        // console.log(element)
        return element.replace(element, tags[element]);
      } else {
        return element;
      }
    })
    .join("");
}