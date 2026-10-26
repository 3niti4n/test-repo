
const valkommen = (name, title = "Medlem") => {
    return `Välkommen ${title} ${name}!`;
};

console.log(valkommen("Klara", "Admin"));

console.log(valkommen("Leo"));
