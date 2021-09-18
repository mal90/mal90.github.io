const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");
let postlist = [];

const getMetaDataIndices = (lines) => {
  const indices = [];
  lines.filter((line, index) => {
    if(/^---/.test(line)) {
      indices.push(index)
    }
  })
  return indices;
}

const getMetaDataContent = (lines, indices) => {
  if (indices.length > 1) {
    const metaDataArray = lines.splice(indices[0]+1, indices[1]-1);
    const metaDataObj = {};
    metaDataArray.forEach((metaData) => {
      metaData = metaData.split(": ");
      metaDataObj[metaData[0]] = metaData[1];
    })
    return metaDataObj;
  }
}

const getContent = (lines, index) => {
  return lines.splice(index).join("\n");
}

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log(`File read failed ${err}`);
    }

    files.forEach((file, i) => {
      let obj = {};
      let post
      fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
        const lines =  contents.split("\n");
        const metaDataIndices = getMetaDataIndices(lines);
        const metaData = getMetaDataContent(lines, metaDataIndices);
        const content = getContent(lines, metaDataIndices[1]);
        post = {
          id: i + 1,
          title: metaData.title ? metaData.title : "No title given",
          author: metaData.author ? metaData.author : "No author given",
          date: metaData.date ? metaData.date : "No date given",
          content: content ? content : "No content given"
        }
        postlist.push(post);
        if (files.length - 1 === 1) {
          fs.writeFileSync("src/posts.json", JSON.stringify(postlist));
        }
      })
    })
  })
}

getPosts()