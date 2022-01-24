function all() {
    console.log("Resolve Feature Branch");
    console.log("Before merge changes to master");
    console.log("git push -f");
    return "Changes from Feature Branch";
}

function main() {
  console.log("git pull -r origin main");
  console.log("git rebase --continue");
  return "Hello Rebase";
}

function mainmain() {
    return `Main branch issue`;
}

function rebaseFunction() {
    let str = 
    `
    This is an merge file for feaure branch

    `;

    console.log("Second Commit");
    return str;
}
