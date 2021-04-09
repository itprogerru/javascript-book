let text = "";
const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s,t,u,v,w,x,y,z".split(",");
const wordCount = 256;
for(let i=0; i<wordCount; i++) {
    let rand = null;
    for (let x=0; x<7; x++) {
        rand = Math.floor(Math.random() * alphabet.length);
        text += alphabet[rand];
    }
    if (i<wordCount-1)
        text += " ";
    else
        text += ".";
}

console.info("text length = " + text.length);
console.info(text);
