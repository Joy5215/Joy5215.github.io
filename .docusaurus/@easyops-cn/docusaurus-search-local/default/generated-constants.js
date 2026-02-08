import lunr from "/home/joy/Desktop/projects/my-website/node_modules/lunr/lunr.js";
require("/home/joy/Desktop/projects/my-website/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/home/joy/Desktop/projects/my-website/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/home/joy/Desktop/projects/my-website/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["zh","en"];
export const searchIndexUrl = "search-index{dir}.json?_=d4c1de59";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;