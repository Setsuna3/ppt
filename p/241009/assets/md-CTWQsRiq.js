import{_ as m}from"./mimage-ICUOZE55.js";import{o as i,c,k as a,e as s,aa as n,l as p,q as u,s as d,B as t}from"./modules/vue-CZkfEai8.js";import{_ as h}from"./two-cols-CmhLKlE3.js";import{u as g,f as _}from"./slidev/context-BRatGrEY.js";import"./index-B6jwO5lx.js";import"./modules/shiki-2px8ptvS.js";const x={__name:"slides.md__slidev_3",setup(f){const{$slidev:k,$nav:B,$clicksContext:e,$clicks:P,$page:$,$renderContext:y,$frontmatter:o}=g();return e.setup(),(A,l)=>{const r=m;return i(),c(h,u(d(t(_)(t(o),2))),{right:a(O=>l[0]||(l[0]=[s("h2",null,"YOLOv2: Better, Faster, Stronger(2016)",-1),s("ul",null,[s("li",null,"在所有卷积层添加 BatchNorm，mAP 提升了 2%"),s("li",null,"提高训练时的图像分辨率到 448 * 448（v1 为 224 * 224），mAP 提升了约 4%"),s("li",null,[n("使用预定义的 Anchor 来预测 Bounding Box。先验的 Anchor 形状比较重要，作者使用 K-means 选择了 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"5")]),s("annotation",{encoding:"application/x-tex"},"k=5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5")])])]),n(" 个合适的 Anchor。mAP 虽然略有下降，但 Recall 有较大提升。")]),s("li",null,"更改了描述 Bounding Box 的参数，原先的描述方法，模型需要很长时间才能稳定预测出合理的偏移量。这使得模型更容易训练，mAP提升了约 5%。"),s("li",null,"以 DarkNet-19 作为基础框架，去除 FC 层，使用全卷积（19 层卷积 + 5 层 Maxpool）。")],-1)])),default:a(()=>[l[1]||(l[1]=s("h2",null,"YOLOv1: You Only Look Once(2015)",-1)),p(r,{layout:"c",class:"h-40",src:"https://s2.loli.net/2024/10/05/f2KoAPOGQFas4Nz.png"}),l[2]||(l[2]=s("ul",null,[s("li",null,"经过 24 层卷积和 2 层全连接，得到 7 * 7 * 30 的特征。 7 * 7 是图像被划分为的区域，30 是两个预测框的参数（x,y,w,h,confidence）和数据集的 20 个类别概率。"),s("li",null,"使用了两个预测框，训练时会选取与真实标签 IOU 大的那个，推理时会选取 confidence 大的那个。"),s("li",null,"由于每个网格只能属于一个类，因此难以运用于小目标检测。")],-1))]),_:1},16)}}},F=x;export{F as default};
