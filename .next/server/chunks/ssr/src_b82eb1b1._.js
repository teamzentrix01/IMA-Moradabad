module.exports = [
"[project]/src/components/ui/AnimatedCounter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AnimatedCounter({ target = 100, suffix = '+', prefix = '', duration = 2000, className = '' }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;
                const startTime = performance.now();
                const startVal = 1;
                const endVal = Number(target) || 1;
                const animate = (currentTime)=>{
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // easeOutCubic curve for smooth premium deceleration
                    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                    const currentCount = Math.floor(startVal + (endVal - startVal) * easeOutProgress);
                    setCount(currentCount);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(endVal);
                    }
                };
                requestAnimationFrame(animate);
            }
        }, {
            threshold: 0.2
        });
        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, [
        target,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: elementRef,
        className: className,
        children: [
            prefix,
            count.toLocaleString(),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedCounter.jsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/membersData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const membersData = [
    {
        "id": 1,
        "name": "Dr. A.K. Singh",
        "membership": "UP/6678/93/96/110957/2004-05/L"
    },
    {
        "id": 2,
        "name": "Dr. A.P.Singh",
        "membership": "UP/4908/93/67/79309/2000-01/L"
    },
    {
        "id": 3,
        "name": "Dr. Aakarsh bajaj",
        "membership": "UP/16789/93/389/275876/2021-22/CL"
    },
    {
        "id": 4,
        "name": "Dr. Abhay Singh",
        "membership": "UP/16358/93/372/269203/2021-22/CL"
    },
    {
        "id": 5,
        "name": "Dr. Abhijeet Sinha",
        "membership": "UP/11745/93/273/189499/2013-14/L"
    },
    {
        "id": 6,
        "name": "Dr. Abhinav Banerjee",
        "membership": "UP/17352/93/398/288338/2022-23/CL"
    },
    {
        "id": 7,
        "name": "Dr. Abida Khatoon",
        "membership": "UP/14670/93/350/242669/2017-18/CL"
    },
    {
        "id": 8,
        "name": "Dr. Absar Ahmad",
        "membership": "UP/9200/93/179/149166/2009-10/L"
    },
    {
        "id": 9,
        "name": "Dr. Abuobadah",
        "membership": "UP/15208/93/355/256570/2019-20/L"
    },
    {
        "id": 10,
        "name": "Dr. Aditya Gupta",
        "membership": "UP/11752/93/280/189508/2013-14/CL"
    },
    {
        "id": 11,
        "name": "Dr. Ahmad Ali",
        "membership": "UP/18377/93/414/304273/2023-24/CL"
    },
    {
        "id": 12,
        "name": "Dr. Ahmed Shamim",
        "membership": "UP/16784/93/384/275871/2021-22/CL"
    },
    {
        "id": 13,
        "name": "Dr. Ajaiveer Singh Narwal",
        "membership": "UP/12180/93/300/195622/2014-15/L"
    },
    {
        "id": 14,
        "name": "Dr. Ajay Agarwal",
        "membership": "UP/9205/93/184/149172/2009-10/CL"
    },
    {
        "id": 15,
        "name": "Dr. Ajay Arora",
        "membership": "UP/5184/93/68/86029/2001-02/CL"
    },
    {
        "id": 16,
        "name": "Dr. Ajay Jain",
        "membership": "UP/8277/93/137/140824/2008-09/L"
    },
    {
        "id": 17,
        "name": "Dr. Ajay Kumar Jain",
        "membership": "UP/9195/93/174/149161/2009-10/L"
    },
    {
        "id": 18,
        "name": "Dr. Ajit Kumar",
        "membership": "UP/18381/93/418/304277/2023-24/CL"
    },
    {
        "id": 19,
        "name": "Dr. Akash Agarwal",
        "membership": "UP/9921/93/211/160133/2011-12/L"
    },
    {
        "id": 20,
        "name": "Dr. Akhil Agarwal",
        "membership": "UP/8532/93/155/143984/2009-10/L"
    },
    {
        "id": 21,
        "name": "Dr. Akhil Chandra Srivastava",
        "membership": "UP/3293/93/13/52896/1996-97/L"
    },
    {
        "id": 22,
        "name": "Dr. Akriti Agarwal",
        "membership": "UP/16779/93/379/275866/2021-22/CL"
    },
    {
        "id": 23,
        "name": "Dr. Akshat Goel",
        "membership": "UP/16354/93/368/269199/2021-22/CL"
    },
    {
        "id": 24,
        "name": "Dr. Alauddin Saifi",
        "membership": "UP/6020/93/77/101941/2003-04/L"
    },
    {
        "id": 25,
        "name": "Dr. Alok Agarwal",
        "membership": "UP/11748/93/276/189502/2013-14/CL"
    },
    {
        "id": 26,
        "name": "Dr. Aman Singhal",
        "membership": "UP/16778/93/378/275865/2021-22/CL"
    },
    {
        "id": 27,
        "name": "Dr. Ambrin Sheikh",
        "membership": "UP/12539/93/316/204672/2015-16/CL"
    },
    {
        "id": 28,
        "name": "Dr. Ameer Singh",
        "membership": "UP/6023/93/80/101944/2003-04/CL"
    },
    {
        "id": 29,
        "name": "Dr. Amit Aluwalia",
        "membership": "UP/7978/93/109/137703/2008-09/CL"
    },
    {
        "id": 30,
        "name": "Dr. Amit goyal",
        "membership": "UP/14773/93/351/247479/2018-19/CL"
    },
    {
        "id": 31,
        "name": "Dr. Amitkumar",
        "membership": "UP/3546/93/30/58357/1996-97/CL"
    },
    {
        "id": 32,
        "name": "Dr. Amit Kumar",
        "membership": "UP/11046/93/236/183769/2013-14/L"
    },
    {
        "id": 33,
        "name": "Dr. Amit Ramanand Mishra",
        "membership": "UP/18373/93/410/304269/2023-24/L"
    },
    {
        "id": 34,
        "name": "Dr. Amit rastogi",
        "membership": "UP/16409/93/377/269634/2021-22/CL"
    },
    {
        "id": 35,
        "name": "Dr. Amit singh",
        "membership": "UP/8531/93/154/143983/2009-10/L"
    },
    {
        "id": 36,
        "name": "Dr. Amita Singh",
        "membership": "UP/6023/93/80/101944/2003-04/CL"
    },
    {
        "id": 37,
        "name": "Dr. Amol Chandra",
        "membership": "UP/12959/93/322/213164/2016-17/L"
    },
    {
        "id": 38,
        "name": "Dr. Anand Singh",
        "membership": "UP/12956/93/319/213156/2016-17/L"
    },
    {
        "id": 39,
        "name": "Dr. Anant Rana",
        "membership": "UP/1167/93/43/118603/2005-06/CL"
    },
    {
        "id": 40,
        "name": "Dr. Anas Fahim",
        "membership": "UP/8137/93/129/140182/2008-09/L"
    },
    {
        "id": 41,
        "name": "Dr. Anil Kumar Mahesh",
        "membership": "UP/8638/93/168/144867/2009-10/L"
    },
    {
        "id": 42,
        "name": "Dr. Anil kumar singh",
        "membership": "UP/7981/93/112/137706/2008-09/CL"
    },
    {
        "id": 43,
        "name": "Dr. Anil Sachdeva",
        "membership": "UP/4513/93/57/71904/1999-00/CL"
    },
    {
        "id": 44,
        "name": "Dr. Anita Rastogi",
        "membership": "UP/5912/93/72/100399/2003-04/CL"
    },
    {
        "id": 45,
        "name": "Dr. Anjali Shekhar",
        "membership": "UP/7974/93/105/137699/2008-09/L"
    },
    {
        "id": 46,
        "name": "Dr. Anjana Agarwal",
        "membership": "UP/3546/93/30/58357/1996-97/CL"
    },
    {
        "id": 47,
        "name": "Dr. Anjuli Kapoor",
        "membership": "UP/9701/93/201/157804/2011-12/L"
    },
    {
        "id": 48,
        "name": "Dr. Anka Kumar",
        "membership": "UP/10616/93/232/176002/2012-13/CL"
    },
    {
        "id": 49,
        "name": "Dr. Ankit Verma",
        "membership": "UP/9919/93/209/160131/2011-12/CL"
    },
    {
        "id": 50,
        "name": "Dr. Ankur Goel",
        "membership": "UP/8128/93/120/140153/2008-09/CL"
    },
    {
        "id": 51,
        "name": "Dr. Anupam Bansal",
        "membership": "UP/11055/93/245/183778/2013-14/CL"
    },
    {
        "id": 52,
        "name": "Dr. Anurag Agarwal",
        "membership": "UP/8282/93/142/140829/2008-09/CL"
    },
    {
        "id": 53,
        "name": "Dr. Anurag Dubey",
        "membership": "UP/13709/93/338/225215/2017-18/L"
    },
    {
        "id": 54,
        "name": "Dr. Anurag Khanna",
        "membership": "UP/4403/93/53/70392/1999-00/CL"
    },
    {
        "id": 55,
        "name": "Dr. Anurag Kumar",
        "membership": "UP/11738/93/266/189491/2013-14/L"
    },
    {
        "id": 56,
        "name": "Dr. Anurag Mehrotra",
        "membership": "UP/9692/93/192/157795/2011-12/CL"
    },
    {
        "id": 57,
        "name": "Dr. Anurag Rastogi",
        "membership": "UP/12470/93/304/203216/2015-16/L"
    },
    {
        "id": 58,
        "name": "Dr. Anurag Varshney",
        "membership": "UP/10257/93/219/167487/2012-13/CL"
    },
    {
        "id": 59,
        "name": "Dr. Arawat Pushkarna",
        "membership": "UP/17786/93/403/296770/2023-24/L"
    },
    {
        "id": 60,
        "name": "Dr. Archana Agarwal",
        "membership": "UP/10355/93/224/170525/2012-13/CL"
    },
    {
        "id": 61,
        "name": "Dr. Archana Agrawal",
        "membership": "UP/7885/93/104/133917/2007-08/L"
    },
    {
        "id": 62,
        "name": "Dr. Archana Goel",
        "membership": "UP/11237/93/251/186422/2013-14/CL"
    },
    {
        "id": 63,
        "name": "Dr. Archana Singh",
        "membership": "UP/12163/93/283/195589/2014-15/CL"
    },
    {
        "id": 64,
        "name": "Dr. Archana Tandon",
        "membership": "UP/10256/93/218/167486/2012-13/CL"
    },
    {
        "id": 65,
        "name": "Dr. Arihant Kumar Jain",
        "membership": "UP/8139/93/131/140184/2008-09/L"
    },
    {
        "id": 66,
        "name": "Dr. Arjit Agarwal",
        "membership": "UP/12479/93/312/203227/2015-16/CL"
    },
    {
        "id": 67,
        "name": "Dr. Arpit Bansal",
        "membership": "UP/18382/93/419/304278/2023-24/CL"
    },
    {
        "id": 68,
        "name": "Dr. Arpit Kumar",
        "membership": "UP/10616/93/232/176002/2012-13/CL"
    },
    {
        "id": 69,
        "name": "Dr. Arpit Verma",
        "membership": "UP/7975/93/106/137700/2008-09/CL"
    },
    {
        "id": 70,
        "name": "Dr. Arshi Parvez",
        "membership": "UP/14199/93/343/232548/2017-18/CL"
    },
    {
        "id": 71,
        "name": "Dr. Arun Kumar Chugh",
        "membership": "UP/9693/93/193/157796/2011-12/CL"
    },
    {
        "id": 72,
        "name": "Dr. Arun Kumar Gupta",
        "membership": "UP/18372/93/409/304268/2023-24/L"
    },
    {
        "id": 73,
        "name": "Dr. Arvind Kumar Gupta",
        "membership": "UP/4398/93/48/70387/1999-00/L"
    },
    {
        "id": 74,
        "name": "Dr. Arvind Kumar Verma",
        "membership": "UP/12179/93/299/195621/2014-15/L"
    },
    {
        "id": 75,
        "name": "Dr. Arvind Saran Kothiwal",
        "membership": "UP/8570/93/159/144651/2009-10/L"
    },
    {
        "id": 76,
        "name": "Dr. Ashi Khurana",
        "membership": "UP/4513/93/57/71904/1999-00/CL"
    },
    {
        "id": 77,
        "name": "Dr. Ashok Kumar",
        "membership": "UP/3263/93/20/52903/1996-97/L"
    },
    {
        "id": 78,
        "name": "Dr. Ashok Kumar Singh",
        "membership": "UP/14774/93/352/247480/2018-19/L"
    },
    {
        "id": 79,
        "name": "Dr. Ashutosh Agarwal",
        "membership": "UP/14201/93/345/232550/2017-18/CL"
    },
    {
        "id": 80,
        "name": "Dr. Atin Sharma",
        "membership": "UP/7977/93/108/137702/2008-09/CL"
    },
    {
        "id": 81,
        "name": "Dr. Atul Nath",
        "membership": "UP/9699/93/199/157802/2011-12/CL"
    },
    {
        "id": 82,
        "name": "Dr. Avinash Khanna",
        "membership": "UP/8133/93/125/140178/2008-09/L"
    },
    {
        "id": 83,
        "name": "Dr. Azeem Iqbal",
        "membership": "UP/13566/93/336/222723/2017-18/L"
    },
    {
        "id": 84,
        "name": "Dr. Babita Gupta",
        "membership": "UP/8123/93/115/140144/2008-09/CL"
    },
    {
        "id": 85,
        "name": "Dr. Bhagat Ram Rana",
        "membership": "UP/9696/93/196/157799/2011-12/L"
    },
    {
        "id": 86,
        "name": "Dr. Bhanu Rastogi",
        "membership": "UP/6951/93/100/115700/2005-06/CL"
    },
    {
        "id": 87,
        "name": "Dr. Manoj Saxena",
        "membership": "UP/2365/57/179/40123/1994-95/CL"
    },
    {
        "id": 88,
        "name": "Dr. Mala Saxena",
        "membership": "UP/2365/57/179/40123/1994-95/CL"
    },
    {
        "id": 89,
        "name": "Dr. Bhuvneshwar Kumar Dutt",
        "membership": "UP/3260/93/17/52900/1996-97/L"
    },
    {
        "id": 90,
        "name": "Dr. Brijkishor Tyagi",
        "membership": "UP/9208/93/187/149177/2009-10/L"
    },
    {
        "id": 91,
        "name": "Dr. Brij pal Singh Lochab",
        "membership": "UP/5910/93/36/100397/2003-04/L"
    },
    {
        "id": 92,
        "name": "Dr. Brij pal Singh Lochab",
        "membership": "UP/11247/93/261/186432/2013-14/L"
    },
    {
        "id": 93,
        "name": "Dr. Brijesh kumar Gupta",
        "membership": "UP/12178/93/298/195619/2014-15/L"
    },
    {
        "id": 94,
        "name": "Dr. Brijesh singh Chauhan",
        "membership": "UP/10356/93/225/170526/2012-13/CL"
    },
    {
        "id": 95,
        "name": "Dr. C.P. Singh",
        "membership": "UP/6950/93/99/115699/2005-06/L"
    },
    {
        "id": 96,
        "name": "Dr. Chanchal Gupta",
        "membership": "UP/9206/93/185/149173/2009-10/CL"
    },
    {
        "id": 97,
        "name": "Dr. Chandra Shekhar",
        "membership": "UP/9211/93/190/149181/2009-10/CL"
    },
    {
        "id": 98,
        "name": "Dr. D.P. Manchanda",
        "membership": "UP/6612/93/91/108247/2004-05/L"
    },
    {
        "id": 99,
        "name": "Dr. Deepak Rastogi",
        "membership": "UP/8528/93/151/143973/2009-10/L"
    },
    {
        "id": 100,
        "name": "Dr. Deepak Sah",
        "membership": "UP/8134/93/126/140179/2008-09/L"
    },
    {
        "id": 101,
        "name": "Dr. Deepali Goyal",
        "membership": "UP/14201/93/345/232550/2017-18/CL"
    },
    {
        "id": 102,
        "name": "Dr. Deepanshu Gupta",
        "membership": "UP/11747/93/275/189501/2013-14/CL"
    },
    {
        "id": 103,
        "name": "Dr. Deepthi Varshney",
        "membership": "UP/16357/93/371/269202/2021-22/CL"
    },
    {
        "id": 104,
        "name": "Dr. Devvrat Singh",
        "membership": "UP/15607/93/364/259106/2019-20/L"
    },
    {
        "id": 105,
        "name": "Dr. Devendra Kumar Gujrati",
        "membership": "UP/10614/93/230/175998/2012-13/L"
    },
    {
        "id": 106,
        "name": "Dr. Devendra Kumar Kanchan",
        "membership": "UP/4510/93/54/71901/1999-00/L"
    },
    {
        "id": 107,
        "name": "Dr. Dhanwanti",
        "membership": "UP/4503/93/59/71894/1999-00/CL"
    },
    {
        "id": 108,
        "name": "Dr. Dhirendra Singh Ahlawat",
        "membership": "UP/6026/93/83/101947/2003-04/CL"
    },
    {
        "id": 109,
        "name": "Dr. Dhruv Agarwal",
        "membership": "UP/9399/93/191/153272/2010-11/CL"
    },
    {
        "id": 110,
        "name": "Dr. Dinesh Mohan",
        "membership": "UP/12628/93/317/207313/2015-16/L"
    },
    {
        "id": 111,
        "name": "Dr. Dipali Verma",
        "membership": "UP/7975/93/106/137700/2008-09/CL"
    },
    {
        "id": 112,
        "name": "Dr. Dishanter Goel",
        "membership": "UP/11234/93/248/186419/2013-14/CL"
    },
    {
        "id": 113,
        "name": "Dr. Divya Goel",
        "membership": "UP/8128/93/120/140153/2008-09/CL"
    },
    {
        "id": 114,
        "name": "Dr. Eram Parveen",
        "membership": "UP/9702/93/202/157805/2011-12/L"
    },
    {
        "id": 115,
        "name": "Dr. Faiyaz Ahmad",
        "membership": "UP/12473/93/307/203219/2015-16/L"
    },
    {
        "id": 116,
        "name": "Dr. Faria Ashraf",
        "membership": "UP/18377/93/414/304273/2023-24/CL"
    },
    {
        "id": 117,
        "name": "Dr. Arooq Yasmeen",
        "membership": "UP/16784/93/384/275871/2021-22/CL"
    },
    {
        "id": 118,
        "name": "Dr. Fatma Khatoon",
        "membership": "UP/8281/93/141/140828/2008-09/CL"
    },
    {
        "id": 119,
        "name": "Dr. Garia ma Singh",
        "membership": "UP/6610/93/89/108244/2004-05/CL"
    },
    {
        "id": 120,
        "name": "Dr. Garima Garg",
        "membership": "UP/12166/93/286/195593/2014-15/CL"
    },
    {
        "id": 121,
        "name": "Dr. Garima Mishra Gupta",
        "membership": "UP/11747/93/275/189501/2013-14/CL"
    },
    {
        "id": 122,
        "name": "Dr. Gaurav Agarwal",
        "membership": "UP/11057/93/247/183780/2013-14/CL"
    },
    {
        "id": 123,
        "name": "Dr. Gaurav Kumar",
        "membership": "UP/8575/93/164/144656/2009-10/CL"
    },
    {
        "id": 124,
        "name": "Dr. Gaurav Kumar Gupta",
        "membership": "UP/15602/93/359/259101/2019-20/CL"
    },
    {
        "id": 125,
        "name": "Dr. Gaurav Tyagi",
        "membership": "UP/11054/93/244/183777/2013-14/CL"
    },
    {
        "id": 126,
        "name": "Dr. Geetesh Manik",
        "membership": "UP/14775/93/353/247481/2018-19/L"
    },
    {
        "id": 127,
        "name": "Dr. Gesumi Mehrotra",
        "membership": "UP/17352/93/398/288338/2022-23/CL"
    },
    {
        "id": 128,
        "name": "Dr. Girdhari Gopal Gupta",
        "membership": "UP/11239/93/253/186424/2013-14/CL"
    },
    {
        "id": 129,
        "name": "Dr. Girish Agarwal",
        "membership": "UP/8279/93/139/140826/2008-09/CL"
    },
    {
        "id": 130,
        "name": "Dr. Girjesh Jain",
        "membership": "UP/11238/93/252/186423/2013-14/CL"
    },
    {
        "id": 131,
        "name": "Dr. Gopesh Mehrotra",
        "membership": "UP/11051/93/241/183774/2013-14/CL"
    },
    {
        "id": 132,
        "name": "Dr. Gorika Singhal",
        "membership": "UP/18384/93/421/304280/2023-24/CL"
    },
    {
        "id": 133,
        "name": "Dr. Goyatri Singh",
        "membership": "UP/5911/93/71/100398/2003-04/L"
    },
    {
        "id": 134,
        "name": "Dr. Gurpreet Singh",
        "membership": "UP/18380/93/417/304276/2023-24/CL"
    },
    {
        "id": 135,
        "name": "Dr. Har Swaroop Singh",
        "membership": "UP/11243/93/257/186428/2013-14/L"
    },
    {
        "id": 136,
        "name": "Dr. Hari Gupta",
        "membership": "UP/11235/93/249/186420/2013-14/CL"
    },
    {
        "id": 137,
        "name": "Dr. Harpreet Singh",
        "membership": "UP/11722/93/262/189325/2013-14/L"
    },
    {
        "id": 138,
        "name": "Dr. Hemant Sharma",
        "membership": "UP/17788/93/405/296772/2023-24/L"
    },
    {
        "id": 139,
        "name": "Dr. Hilal Warsi",
        "membership": "UP/12957/93/320/213160/2016-17/L"
    },
    {
        "id": 140,
        "name": "Dr. Himani Jain",
        "membership": "UP/9694/93/194/157797/2011-12/CL"
    },
    {
        "id": 141,
        "name": "Dr. Himanshu Chaturvedi",
        "membership": "UP/8573/93/162/144654/2009-10/L"
    },
    {
        "id": 142,
        "name": "Dr. Himanshu Gupta",
        "membership": "UP/11744/93/272/189498/2013-14/L"
    },
    {
        "id": 143,
        "name": "Dr. Huda Ahmad",
        "membership": "UP/13560/93/330/222711/2017-18/L"
    },
    {
        "id": 144,
        "name": "Dr. Ila Shah",
        "membership": "UP/3547/93/31/58358/1996-97/CL"
    },
    {
        "id": 145,
        "name": "Dr. Inder Sen",
        "membership": "UP/850/93/9/23025/1991-92/L"
    },
    {
        "id": 146,
        "name": "Dr. Inderjeet Singh",
        "membership": "UP/9204/93/183/149171/2009-10/CL"
    },
    {
        "id": 147,
        "name": "Dr. Irfan Ahmad",
        "membership": "UP/17349/93/395/288335/2022-23/L"
    },
    {
        "id": 148,
        "name": "Dr. Irshad Mohd.",
        "membership": "UP/9197/93/176/149163/2009-10/L"
    },
    {
        "id": 149,
        "name": "Dr. Ish Middha",
        "membership": "UP/18374/93/411/304270/2023-24/L"
    },
    {
        "id": 150,
        "name": "Dr. Jagmohan Mahajan",
        "membership": "UP/3265/93/22/52905/1996-97/CL"
    },
    {
        "id": 151,
        "name": "Dr. Jagdish Chandra Arora",
        "membership": "UP/3261/93/18/52901/1996-97/L"
    },
    {
        "id": 152,
        "name": "Dr. Jagdish Saran Gupta",
        "membership": "UP/6738/93/97/112128/2004-05/L"
    },
    {
        "id": 153,
        "name": "Dr. Jaiprakash Tandon",
        "membership": "UP/10256/93/218/167486/2012-13/CL"
    },
    {
        "id": 154,
        "name": "Dr. Jitendra Kumar",
        "membership": "UP/4399/93/49/70388/1999-00/L"
    },
    {
        "id": 155,
        "name": "Dr. Itendra Sharma",
        "membership": "UP/8530/93/153/143979/2009-10/L"
    },
    {
        "id": 156,
        "name": "Dr. Julfiqar",
        "membership": "UP/12168/93/288/195598/2014-15/L"
    },
    {
        "id": 157,
        "name": "Dr. Jyoti Arora",
        "membership": "UP/5184/93/68/86029/2001-02/CL"
    },
    {
        "id": 158,
        "name": "Dr. Jyoti Rastogi",
        "membership": "UP/6951/93/100/115700/2005-06/CL"
    },
    {
        "id": 159,
        "name": "Dr. Jyoti Yadav",
        "membership": "UP/16790/93/390/275877/2021-22/CL"
    },
    {
        "id": 160,
        "name": "Dr. Jyotika Gupta",
        "membership": "UP/404/93/5/12483/1990-91/CL"
    },
    {
        "id": 161,
        "name": "Dr. Jyotsna Srivastav",
        "membership": "UP/11746/93/274/189500/2013-14/CL"
    },
    {
        "id": 162,
        "name": "Dr. Kailash Chandra Kochhar",
        "membership": "UP/6024/93/81/101945/2003-04/CL"
    },
    {
        "id": 163,
        "name": "Dr. Kajli Gupta",
        "membership": "UP/5185/93/69/86030/2001-02/CL"
    },
    {
        "id": 164,
        "name": "Dr. Kalpana Singh",
        "membership": "UP/6026/93/83/101947/2003-04/CL"
    },
    {
        "id": 165,
        "name": "Dr. Kamlesh Mahajan",
        "membership": "UP/3265/93/22/52905/1996-97/CL"
    },
    {
        "id": 166,
        "name": "Dr. Kartikaya Gupta",
        "membership": "UP/13708/93/337/225214/2017-18/CL"
    },
    {
        "id": 167,
        "name": "Dr. Kartikeya Kumar",
        "membership": "UP/6610/93/89/108244/2004-05/CL"
    },
    {
        "id": 168,
        "name": "Dr. Kashif Mohammad",
        "membership": "UP/15608/93/365/259107/2019-20/L"
    },
    {
        "id": 169,
        "name": "Dr. Kiran Gautam",
        "membership": "UP/13556/93/326/222702/2017-18/CL"
    },
    {
        "id": 170,
        "name": "Dr. Kishanpal Varshney",
        "membership": "UP/11055/93/245/183778/2013-14/CL"
    },
    {
        "id": 171,
        "name": "Dr. Kshitij Rana",
        "membership": "UP/1167/93/43/118603/2005-06/CL"
    },
    {
        "id": 172,
        "name": "Dr. Kumkum Mehrotra",
        "membership": "UP/11051/93/241/183774/2013-14/CL"
    },
    {
        "id": 173,
        "name": "Dr. Kusha Yadav Goel",
        "membership": "UP/16354/93/368/269199/2021-22/CL"
    },
    {
        "id": 174,
        "name": "Dr. Alit Kumar Dhar",
        "membership": "UP/6614/93/93/108250/2004-05/CL"
    },
    {
        "id": 175,
        "name": "Dr. Latha N",
        "membership": "UP/9918/93/208/160130/2011-12/CL"
    },
    {
        "id": 176,
        "name": "Dr. Leena Chauhan",
        "membership": "UP/7981/93/112/137706/2008-09/CL"
    },
    {
        "id": 177,
        "name": "Dr. Leena Mehrotra",
        "membership": "UP/12167/93/287/195595/2014-15/CL"
    },
    {
        "id": 178,
        "name": "Dr. Lovlesh Singh",
        "membership": "UP/14243/93/348/232786/2017-18/L"
    },
    {
        "id": 179,
        "name": "Dr. Madhu Agarwal",
        "membership": "UP/3262/93/19/52902/1996-97/CL"
    },
    {
        "id": 180,
        "name": "Dr. Madhuraj",
        "membership": "UP/3289/93/11/52894/1996-97/CL"
    },
    {
        "id": 181,
        "name": "Dr. Madhu Shekhar",
        "membership": "UP/6676/93/38/110955/2004-05/L"
    },
    {
        "id": 182,
        "name": "Dr. Madhu Soodan",
        "membership": "UP/16357/93/371/269202/2021-22/CL"
    },
    {
        "id": 183,
        "name": "Dr. Madhulika Batra",
        "membership": "UP/8535/93/158/143989/2009-10/CL"
    },
    {
        "id": 184,
        "name": "Dr. Magan Mehrotra",
        "membership": "UP/12167/93/287/195595/2014-15/CL"
    },
    {
        "id": 185,
        "name": "Dr. Mahtab",
        "membership": "UP/16353/93/367/269198/2021-22/CL"
    },
    {
        "id": 186,
        "name": "Dr. Mala Sharma",
        "membership": "UP/12165/93/285/195591/2014-15/CL"
    },
    {
        "id": 187,
        "name": "Dr. Mamta Agarwal",
        "membership": "UP/14202/93/346/232551/2017-18/CL"
    },
    {
        "id": 188,
        "name": "Dr. Mamta Kumari",
        "membership": "UP/12480/93/313/203235/2015-16/CL"
    },
    {
        "id": 189,
        "name": "Dr. Man Mohan Singh",
        "membership": "UP/4512/93/56/71903/1999-00/L"
    },
    {
        "id": 190,
        "name": "Dr. Maneesha Jain",
        "membership": "UP/10617/93/233/176003/2012-13/CL"
    },
    {
        "id": 191,
        "name": "Dr. Maninder Kaur",
        "membership": "UP/18380/93/417/304276/2023-24/CL"
    },
    {
        "id": 192,
        "name": "Dr. Manish Kapoor",
        "membership": "UP/6607/93/86/108238/2004-05/L"
    },
    {
        "id": 193,
        "name": "Dr. Manish Kumar Singh",
        "membership": "UP/18383/93/420/304279/2023-24/CL"
    },
    {
        "id": 194,
        "name": "Dr. Manish Mahajan",
        "membership": "UP/16360/93/374/269205/2021-22/L"
    },
    {
        "id": 195,
        "name": "Dr. Manjesh Rathi",
        "membership": "UP/13558/93/328/222709/2017-18/CL"
    },
    {
        "id": 196,
        "name": "Dr. Manmeet Kaur",
        "membership": "UP/9204/93/183/149171/2009-10/CL"
    },
    {
        "id": 197,
        "name": "Dr. Manoharlal Shridhar",
        "membership": "UP/9207/93/186/149174/2009-10/CL"
    },
    {
        "id": 198,
        "name": "Dr. Manoj Arora",
        "membership": "UP/8527/93/150/143972/2009-10/L"
    },
    {
        "id": 199,
        "name": "Dr. Manoj Kumar Agarwal",
        "membership": "UP/8274/93/134/140821/2008-09/L"
    },
    {
        "id": 200,
        "name": "Dr. Manzoor Ahmed",
        "membership": "UP/12539/93/316/204672/2015-16/CL"
    },
    {
        "id": 201,
        "name": "Dr. Mayank Mohan Agarwal",
        "membership": "UP/4397/93/47/70386/1999-00/L"
    },
    {
        "id": 202,
        "name": "Dr. Mazhar Ali",
        "membership": "UP/8534/93/157/143988/2009-10/CL"
    },
    {
        "id": 203,
        "name": "Dr. Minakshi Kochhar",
        "membership": "UP/6024/93/81/101945/2003-04/CL"
    },
    {
        "id": 204,
        "name": "Dr. Mohak Agarwal",
        "membership": "UP/17790/93/407/296774/2023-24/CL"
    },
    {
        "id": 205,
        "name": "Dr. Mohammad Aquib Bashfaq",
        "membership": "UP/17789/93/406/296773/2023-24/L"
    },
    {
        "id": 206,
        "name": "Dr. Mohammed Tarique Ali",
        "membership": "UP/9199/93/178/149165/2009-10/L"
    },
    {
        "id": 207,
        "name": "Dr. Mohd. Farooqh",
        "membership": "UP/18379/93/416/304275/2023-24/CL"
    },
    {
        "id": 208,
        "name": "Dr. Mohd. Shaigan",
        "membership": "UP/16353/93/367/269198/2021-22/CL"
    },
    {
        "id": 209,
        "name": "Dr. Mohd.Asad",
        "membership": "UP/6609/93/88/108242/2004-05/L"
    },
    {
        "id": 210,
        "name": "Dr. Mohd. Asadkhan",
        "membership": "UP/7080/93/102/118604/2005-06/CL"
    },
    {
        "id": 211,
        "name": "Dr. Mohd.Fareed",
        "membership": "UP/12955/93/318/213154/2016-17/L"
    },
    {
        "id": 212,
        "name": "Dr. Mohd.Razisyed",
        "membership": "UP/18371/93/408/304267/2023-24/L"
    },
    {
        "id": 213,
        "name": "Dr. Mohit Sharma",
        "membership": "UP/17153/93/394/282810/2021-22/L"
    },
    {
        "id": 214,
        "name": "Dr. Mohit Tandon",
        "membership": "UP/8132/93/124/140176/2008-09/L"
    },
    {
        "id": 215,
        "name": "Dr. Mona Agarwal",
        "membership": "UP/3449/93/28/56986/1996-97/CL"
    },
    {
        "id": 216,
        "name": "Dr. Monika Srivastava",
        "membership": "UP/14773/93/351/247479/2018-19/CL"
    },
    {
        "id": 217,
        "name": "Dr. Monis Jaleel",
        "membership": "UP/12162/93/282/195588/2014-15/CL"
    },
    {
        "id": 218,
        "name": "Dr. Mujahid Sherwani",
        "membership": "UP/1188/93/46/123608/2006-07/L"
    },
    {
        "id": 219,
        "name": "Dr. Mukesh Agarwal",
        "membership": "UP/9914/93/204/160126/2011-12/CL"
    },
    {
        "id": 220,
        "name": "Dr. Mukesh Kumar",
        "membership": "UP/10166/93/215/166065/2012-13/L"
    },
    {
        "id": 221,
        "name": "Dr. Mukesh Raizada",
        "membership": "UP/12169/93/289/195600/2014-15/L"
    },
    {
        "id": 222,
        "name": "Dr. Muneet Agarwal",
        "membership": "UP/13565/93/335/222722/2017-18/L"
    },
    {
        "id": 223,
        "name": "Dr. Najmul Huda",
        "membership": "UP/8127/93/119/140152/2008-09/CL"
    },
    {
        "id": 224,
        "name": "Dr. Namrata Shekhar",
        "membership": "UP/9211/93/190/149181/2009-10/CL"
    },
    {
        "id": 225,
        "name": "Dr. Narendra Kumar",
        "membership": "UP/11750/93/278/189505/2013-14/CL"
    },
    {
        "id": 226,
        "name": "Dr. Narendra Kumar Chhabra",
        "membership": "UP/10293/93/220/168407/2012-13/L"
    },
    {
        "id": 227,
        "name": "Dr. Naresh Chandra Agrawal",
        "membership": "UP/6606/93/40/108236/2004-05/L"
    },
    {
        "id": 228,
        "name": "Dr. Naveen Kumar",
        "membership": "UP/8415/93/144/143266/2009-10/L"
    },
    {
        "id": 229,
        "name": "Dr. Navin Kumar",
        "membership": "UP/12163/93/283/195589/2014-15/CL"
    },
    {
        "id": 230,
        "name": "Dr. Navneet Kuwar Madan",
        "membership": "UP/8125/93/117/140149/2008-09/CL"
    },
    {
        "id": 231,
        "name": "Dr. Neenu Kapoor",
        "membership": "UP/8280/93/140/140827/2008-09/CL"
    },
    {
        "id": 232,
        "name": "Dr. Neeraj Gupta",
        "membership": "UP/8123/93/115/140144/2008-09/CL"
    },
    {
        "id": 233,
        "name": "Dr. Neeraj Kumar Agarwal",
        "membership": "UP/8417/93/146/143270/2009-10/CL"
    },
    {
        "id": 234,
        "name": "Dr. Neetu Rastogi",
        "membership": "UP/9209/93/188/149178/2009-10/CL"
    },
    {
        "id": 235,
        "name": "Dr. Neetu Verma",
        "membership": "UP/15211/93/358/256573/2019-20/CL"
    },
    {
        "id": 236,
        "name": "Dr. Neha Chandra",
        "membership": "UP/12960/93/323/213166/2016-17/CL"
    },
    {
        "id": 237,
        "name": "Dr. Nidhi Goyal",
        "membership": "UP/7980/93/111/137705/2008-09/CL"
    },
    {
        "id": 238,
        "name": "Dr. Nidhi Pagia Singhal",
        "membership": "UP/16791/93/391/275878/2021-22/CL"
    },
    {
        "id": 239,
        "name": "Dr. Nidhi Thakur",
        "membership": "UP/7979/93/110/137704/2008-09/CL"
    },
    {
        "id": 240,
        "name": "Dr. Nikita Jain",
        "membership": "UP/16778/93/378/275865/2021-22/CL"
    },
    {
        "id": 241,
        "name": "Dr. Nimish Gupta",
        "membership": "UP/12476/93/303/203222/2015-16/L"
    },
    {
        "id": 242,
        "name": "Dr. Nishat Anjum",
        "membership": "UP/13174/93/324/214249/2016-17/CL"
    },
    {
        "id": 243,
        "name": "Dr. Nishi Agarwal",
        "membership": "UP/8533/93/156/143987/2009-10/CL"
    },
    {
        "id": 244,
        "name": "Dr. Nitain Kumar Batra",
        "membership": "UP/8535/93/158/143989/2009-10/CL"
    },
    {
        "id": 245,
        "name": "Dr. Nitin Kumar",
        "membership": "UP/6949/93/41/115698/2005-06/L"
    },
    {
        "id": 246,
        "name": "Dr. Nitish Garg",
        "membership": "UP/15606/93/363/259105/2019-20/CL"
    },
    {
        "id": 247,
        "name": "Dr. Nitu Varshney",
        "membership": "UP/10257/93/219/167487/2012-13/CL"
    },
    {
        "id": 248,
        "name": "Dr. Nupur Gupta",
        "membership": "UP/11235/93/249/186420/2013-14/CL"
    },
    {
        "id": 249,
        "name": "Dr. Nupur Singh",
        "membership": "UP/10618/93/234/176004/2012-13/CL"
    },
    {
        "id": 250,
        "name": "Dr. Nutan Khare",
        "membership": "UP/8577/93/166/144658/2009-10/CL"
    },
    {
        "id": 251,
        "name": "Dr. Padam Jagupta",
        "membership": "UP/4402/93/52/70391/1999-00/CL"
    },
    {
        "id": 252,
        "name": "Dr. Pallav Agarwal",
        "membership": "UP/3548/93/32/58359/1996-97/CL"
    },
    {
        "id": 253,
        "name": "Dr. Pallavi Ahluwalia",
        "membership": "UP/7978/93/109/137703/2008-09/CL"
    },
    {
        "id": 254,
        "name": "Dr. Pankaj Bundela",
        "membership": "UP/14435/93/349/235599/2017-18/L"
    },
    {
        "id": 255,
        "name": "Dr. Pankaj Gupta",
        "membership": "UP/9198/93/177/149164/2009-10/L"
    },
    {
        "id": 256,
        "name": "Dr. Pankaj Gupta",
        "membership": "UP/15209/93/356/256571/2019-20/L"
    },
    {
        "id": 257,
        "name": "Dr. Pankaj Kumar",
        "membership": "UP/849/93/8/23024/1991-92/L"
    },
    {
        "id": 258,
        "name": "Dr. Parag Agarwal",
        "membership": "UP/9698/93/198/157801/2011-12/L"
    },
    {
        "id": 259,
        "name": "Dr. Parul Khanna",
        "membership": "UP/17152/93/393/282809/2021-22/CL"
    },
    {
        "id": 260,
        "name": "Dr. Pasha Latif",
        "membership": "UP/8281/93/141/140828/2008-09/CL"
    },
    {
        "id": 261,
        "name": "Dr. Pankaj Kumar Saini",
        "membership": "UP/16787/93/387/275874/2021-22/L"
    },
    {
        "id": 262,
        "name": "Dr. Payal Jain",
        "membership": "UP/13555/93/325/222701/2017-18/CL"
    },
    {
        "id": 263,
        "name": "Dr. Payal Puri",
        "membership": "UP/8124/93/116/140147/2008-09/CL"
    },
    {
        "id": 264,
        "name": "Dr. Piyush Jain",
        "membership": "UP/4511/93/55/71902/1999-00/CL"
    },
    {
        "id": 265,
        "name": "Dr. Pooja Tandon",
        "membership": "UP/9692/93/192/157795/2011-12/CL"
    },
    {
        "id": 266,
        "name": "Dr. Poonam Rani",
        "membership": "UP/16356/93/370/269201/2021-22/CL"
    },
    {
        "id": 267,
        "name": "Dr. Poonam Singh",
        "membership": "UP/9203/93/182/149170/2009-10/CL"
    },
    {
        "id": 268,
        "name": "Dr. Poornima Gupta",
        "membership": "UP/11236/93/250/186421/2013-14/CL"
    },
    {
        "id": 269,
        "name": "Dr. Prabhat Kumar",
        "membership": "UP/4506/93/62/71897/1999-00/L"
    },
    {
        "id": 270,
        "name": "Dr. Pradeep Agarwal",
        "membership": "UP/8533/93/156/143987/2009-10/CL"
    },
    {
        "id": 271,
        "name": "Dr. Pradeep Kumar",
        "membership": "UP/16356/93/370/269201/2021-22/CL"
    },
    {
        "id": 272,
        "name": "Dr. Pradeep Kumar Shukla",
        "membership": "UP/5913/93/73/100400/2003-04/CL"
    },
    {
        "id": 273,
        "name": "Dr. Pradeep Lohia",
        "membership": "UP/10165/93/214/166064/2012-13/L"
    },
    {
        "id": 274,
        "name": "Dr. Pragati Gupta",
        "membership": "UP/11239/93/253/186424/2013-14/CL"
    },
    {
        "id": 275,
        "name": "Dr. Prahladkishan Kapoor",
        "membership": "UP/3259/93/16/52899/1996-97/L"
    },
    {
        "id": 276,
        "name": "Dr. Pramila Gupta",
        "membership": "UP/11752/93/280/189508/2013-14/CL"
    },
    {
        "id": 277,
        "name": "Dr. Pramod Kumar Pandey",
        "membership": "UP/3287/93/10/52893/1996-97/CL"
    },
    {
        "id": 278,
        "name": "Dr. Pramod Kumar Agarwal",
        "membership": "UP/3262/93/19/52902/1996-97/CL"
    },
    {
        "id": 279,
        "name": "Dr. Pramod Kumar Gupta",
        "membership": "UP/6739/93/98/112129/2004-05/L"
    },
    {
        "id": 280,
        "name": "Dr. Pramod Kumar Tyagi",
        "membership": "UP/12174/93/294/195614/2014-15/L"
    },
    {
        "id": 281,
        "name": "Dr. Prapti Singh",
        "membership": "UP/10164/93/213/166063/2012-13/L"
    },
    {
        "id": 282,
        "name": "Dr. Praroop Gupta",
        "membership": "UP/18384/93/421/304280/2023-24/CL"
    },
    {
        "id": 283,
        "name": "Dr. Prashant Kumar Pandey",
        "membership": "UP/16359/93/373/269204/2021-22/L"
    },
    {
        "id": 284,
        "name": "Dr. Pratap Manvendra Tyagi",
        "membership": "UP/7021/93/42/117511/2005-06/L"
    },
    {
        "id": 285,
        "name": "Dr. Prateek Garg",
        "membership": "UP/13557/93/327/222708/2017-18/CL"
    },
    {
        "id": 286,
        "name": "Dr. Pratibha Roy",
        "membership": "UP/18381/93/418/304277/2023-24/CL"
    },
    {
        "id": 287,
        "name": "Dr. Prawin Kumar Jain",
        "membership": "UP/12173/93/293/195611/2014-15/L"
    },
    {
        "id": 288,
        "name": "Dr. Radeep Kumar Gupta",
        "membership": "UP/9206/93/185/149173/2009-10/CL"
    },
    {
        "id": 289,
        "name": "Dr. Preenagau Papa Bajaj",
        "membership": "UP/16789/93/389/275876/2021-22/CL"
    },
    {
        "id": 290,
        "name": "Dr. Preeti Gupta",
        "membership": "UP/8576/93/165/144657/2009-10/CL"
    },
    {
        "id": 291,
        "name": "Dr. Prem Kumar Khanna",
        "membership": "UP/12164/93/284/195590/2014-15/CL"
    },
    {
        "id": 292,
        "name": "Dr. Premlata Shridhar",
        "membership": "UP/9207/93/186/149174/2009-10/CL"
    },
    {
        "id": 293,
        "name": "Dr. Pritam Bala",
        "membership": "UP/11742/93/270/189496/2013-14/L"
    },
    {
        "id": 294,
        "name": "Dr. Priya Singhal",
        "membership": "UP/8642/93/172/144871/2009-10/L"
    },
    {
        "id": 295,
        "name": "Dr. Puri Ashish",
        "membership": "UP/8124/93/116/140147/2008-09/CL"
    },
    {
        "id": 296,
        "name": "Dr. Pushpendra Kumar",
        "membership": "UP/9196/93/175/149162/2009-10/L"
    },
    {
        "id": 297,
        "name": "Dr. R.B. Singh",
        "membership": "UP/4503/93/59/71894/1999-00/CL"
    },
    {
        "id": 298,
        "name": "Dr. R.C. Sharma",
        "membership": "UP/7283/93/45/122028/2005-06/L"
    },
    {
        "id": 299,
        "name": "Dr. Rachana",
        "membership": "UP/18378/93/415/304274/2023-24/CL"
    },
    {
        "id": 300,
        "name": "Dr. Raees Akhter",
        "membership": "UP/15210/93/357/256572/2019-20/L"
    },
    {
        "id": 301,
        "name": "Dr. Raghu Prakash",
        "membership": "UP/13564/93/334/222721/2017-18/L"
    },
    {
        "id": 302,
        "name": "Dr. Rahul Chaudhary",
        "membership": "UP/16790/93/390/275877/2021-22/CL"
    },
    {
        "id": 303,
        "name": "Dr. Rahul Gupta",
        "membership": "UP/11236/93/250/186421/2013-14/CL"
    },
    {
        "id": 304,
        "name": "Dr. Rais Fareezi",
        "membership": "UP/15604/93/361/259103/2019-20/CL"
    },
    {
        "id": 305,
        "name": "Dr. Raj Kapoor",
        "membership": "UP/8280/93/140/140827/2008-09/CL"
    },
    {
        "id": 306,
        "name": "Dr. Rajat Agarwal",
        "membership": "UP/7883/93/35/133915/2007-08/L"
    },
    {
        "id": 307,
        "name": "Dr. Rajat Shekar",
        "membership": "UP/7022/93/101/117512/2005-06/L"
    },
    {
        "id": 308,
        "name": "Dr. Rajeev Kumar Sharma",
        "membership": "UP/11047/93/237/183770/2013-14/L"
    },
    {
        "id": 309,
        "name": "Dr. Rajeev Kumar Singh",
        "membership": "UP/13556/93/326/222702/2017-18/CL"
    },
    {
        "id": 310,
        "name": "Dr. Rajendra Singh",
        "membership": "UP/10167/93/216/166066/2012-13/L"
    },
    {
        "id": 311,
        "name": "Dr. Rajesh Kumar Singh",
        "membership": "UP/9203/93/182/149170/2009-10/CL"
    },
    {
        "id": 312,
        "name": "Dr. Rajesh Rastogi",
        "membership": "UP/5912/93/72/100399/2003-04/CL"
    },
    {
        "id": 313,
        "name": "Dr. Rajiv Gupta",
        "membership": "UP/16792/93/392/275879/2021-22/CL"
    },
    {
        "id": 314,
        "name": "Dr. Raj Shekhar Gupta",
        "membership": "UP/12166/93/286/195593/2014-15/CL"
    },
    {
        "id": 315,
        "name": "Dr. Rajvir Singh",
        "membership": "UP/6613/93/92/108249/2004-05/CL"
    },
    {
        "id": 316,
        "name": "Dr. Rakesh Chandra Agarwal",
        "membership": "UP/10353/93/222/170522/2012-13/L"
    },
    {
        "id": 317,
        "name": "Dr. Rakesh Khare",
        "membership": "UP/8577/93/166/144658/2009-10/CL"
    },
    {
        "id": 318,
        "name": "Dr. Rakesh Kumar",
        "membership": "UP/8574/93/163/144655/2009-10/L"
    },
    {
        "id": 319,
        "name": "Dr. Rakesh Kumar",
        "membership": "UP/8136/93/128/140181/2008-09/L"
    },
    {
        "id": 320,
        "name": "Dr. Rakesh Kumar Biswas",
        "membership": "UP/18378/93/415/304274/2023-24/CL"
    },
    {
        "id": 321,
        "name": "Dr. Rakesh Kumar Jain",
        "membership": "UP/6608/93/87/108240/2004-05/L"
    },
    {
        "id": 322,
        "name": "Dr. Ram B. Singh",
        "membership": "UP/9695/93/195/157798/2011-12/L"
    },
    {
        "id": 323,
        "name": "Dr. Ram Mohan Agarwal",
        "membership": "UP/3266/93/23/52906/1996-97/CL"
    },
    {
        "id": 324,
        "name": "Dr. Ranjan Singh",
        "membership": "UP/9210/93/189/149179/2009-10/CL"
    },
    {
        "id": 325,
        "name": "Dr. Rashmi Lata",
        "membership": "UP/9699/93/199/157802/2011-12/CL"
    },
    {
        "id": 326,
        "name": "Dr. Ravi Gangal",
        "membership": "UP/12003/93/281/65480/1998-99/CL"
    },
    {
        "id": 327,
        "name": "Dr. Ravi Jain",
        "membership": "UP/13555/93/325/222701/2017-18/CL"
    },
    {
        "id": 328,
        "name": "Dr. Ravi Kumar Sharma",
        "membership": "UP/12165/93/285/195591/2014-15/CL"
    },
    {
        "id": 329,
        "name": "Dr. Rehana Najam",
        "membership": "UP/8127/93/119/140152/2008-09/CL"
    },
    {
        "id": 330,
        "name": "Dr. Rekha Agarwal",
        "membership": "UP/3266/93/23/52906/1996-97/CL"
    },
    {
        "id": 331,
        "name": "Dr. Rekha Singh",
        "membership": "UP/15603/93/360/259102/2019-20/CL"
    },
    {
        "id": 332,
        "name": "Dr. Renu Jain",
        "membership": "UP/6025/93/82/101946/2003-04/CL"
    },
    {
        "id": 333,
        "name": "Dr. Renuka Tyagi",
        "membership": "UP/11054/93/244/183777/2013-14/CL"
    },
    {
        "id": 334,
        "name": "Dr. Richa Agarwal",
        "membership": "UP/14203/93/347/232552/2017-18/CL"
    },
    {
        "id": 335,
        "name": "Dr. Richa Agarwal",
        "membership": "UP/13557/93/327/222708/2017-18/CL"
    },
    {
        "id": 336,
        "name": "Dr. Richa Agarwal",
        "membership": "UP/8279/93/139/140826/2008-09/CL"
    },
    {
        "id": 337,
        "name": "Dr. Richa Gangal",
        "membership": "UP/12003/93/281/65480/1998-99/CL"
    },
    {
        "id": 338,
        "name": "Dr. Richa Garg",
        "membership": "UP/11751/93/279/189506/2013-14/CL"
    },
    {
        "id": 339,
        "name": "Dr. Rishi Middha",
        "membership": "UP/18375/93/412/304271/2023-24/L"
    },
    {
        "id": 340,
        "name": "Dr. Rita Khanna",
        "membership": "UP/12164/93/284/195590/2014-15/CL"
    },
    {
        "id": 341,
        "name": "Dr. Ritika Agarwal",
        "membership": "UP/8641/93/171/144870/2009-10/L"
    },
    {
        "id": 342,
        "name": "Dr. Ritu Sanga",
        "membership": "UP/18383/93/420/304279/2023-24/CL"
    },
    {
        "id": 343,
        "name": "Dr. Ritu Shridhar",
        "membership": "UP/11241/93/255/186426/2013-14/CL"
    },
    {
        "id": 344,
        "name": "Dr. Rohiniagarwal",
        "membership": "UP/9399/93/191/153272/2010-11/CL"
    },
    {
        "id": 345,
        "name": "Dr. Ruby Chugh",
        "membership": "UP/9693/93/193/157796/2011-12/CL"
    },
    {
        "id": 346,
        "name": "Dr. Ruhi Agarwal",
        "membership": "UP/10615/93/231/176000/2012-13/CL"
    },
    {
        "id": 347,
        "name": "Dr. Saba Asad",
        "membership": "UP/7080/93/102/118604/2005-06/CL"
    },
    {
        "id": 348,
        "name": "Dr. Sachin Agarwal",
        "membership": "UP/9703/93/203/157806/2011-12/L"
    },
    {
        "id": 349,
        "name": "Dr. Sachin Dev",
        "membership": "UP/8129/93/121/140171/2008-09/CL"
    },
    {
        "id": 350,
        "name": "Dr. Sadhna Gupta",
        "membership": "UP/16792/93/392/275879/2021-22/CL"
    },
    {
        "id": 351,
        "name": "Dr. Saleem Akhtar",
        "membership": "UP/11049/93/239/183772/2013-14/L"
    },
    {
        "id": 352,
        "name": "Dr. Salman Hasan Khan",
        "membership": "UP/12304/93/302/199736/2014-15/L"
    },
    {
        "id": 353,
        "name": "Dr. Samir Gupta",
        "membership": "UP/5185/93/69/86030/2001-02/CL"
    },
    {
        "id": 354,
        "name": "Dr. Samir Jain",
        "membership": "UP/10617/93/233/176003/2012-13/CL"
    },
    {
        "id": 355,
        "name": "Dr. Sandeep Jain",
        "membership": "UP/9694/93/194/157797/2011-12/CL"
    },
    {
        "id": 356,
        "name": "Dr. Sandeep Raj",
        "membership": "UP/5186/93/70/86031/2001-02/L"
    },
    {
        "id": 357,
        "name": "Dr. Sangeeta Kapoor",
        "membership": "UP/16785/93/385/275872/2021-22/L"
    },
    {
        "id": 358,
        "name": "Dr. Ngita Madan",
        "membership": "UP/8125/93/117/140149/2008-09/CL"
    },
    {
        "id": 359,
        "name": "Dr. Sanjai Shah",
        "membership": "UP/3547/93/31/58358/1996-97/CL"
    },
    {
        "id": 360,
        "name": "Dr. Sanjay Kumar Gupta",
        "membership": "UP/8576/93/165/144657/2009-10/CL"
    },
    {
        "id": 361,
        "name": "Dr. Sanjeev Jain",
        "membership": "UP/8639/93/169/144868/2009-10/L"
    },
    {
        "id": 362,
        "name": "Dr. Sanjeev Kumar",
        "membership": "UP/11743/93/271/189497/2013-14/L"
    },
    {
        "id": 363,
        "name": "Dr. Sanjeev Kumar Singh",
        "membership": "UP/15211/93/358/256573/2019-20/CL"
    },
    {
        "id": 364,
        "name": "Dr. Sanjeev Varshney",
        "membership": "UP/7982/93/113/137707/2008-09/CL"
    },
    {
        "id": 365,
        "name": "Dr. Sanober Wasim",
        "membership": "UP/8130/93/122/140173/2008-09/CL"
    },
    {
        "id": 366,
        "name": "Dr. Sarika Sirohi",
        "membership": "UP/11246/93/260/186431/2013-14/L"
    },
    {
        "id": 367,
        "name": "Dr. Sartaz Alam",
        "membership": "UP/16361/93/375/269206/2021-22/L"
    },
    {
        "id": 368,
        "name": "Dr. Satish Kumar Raj",
        "membership": "UP/3289/93/11/52894/1996-97/CL"
    },
    {
        "id": 369,
        "name": "Dr. Saurabh Agarwal",
        "membership": "UP/9918/93/208/160130/2011-12/CL"
    },
    {
        "id": 370,
        "name": "Dr. Saurabh Jindal",
        "membership": "UP/14202/93/346/232551/2017-18/CL"
    },
    {
        "id": 371,
        "name": "Dr. Seema Dev",
        "membership": "UP/8129/93/121/140171/2008-09/CL"
    },
    {
        "id": 372,
        "name": "Dr. Seema Middha",
        "membership": "UP/8122/93/114/140143/2008-09/CL"
    },
    {
        "id": 373,
        "name": "Dr. Shachi",
        "membership": "UP/16358/93/372/269203/2021-22/CL"
    },
    {
        "id": 374,
        "name": "Dr. Shaifali Gupta",
        "membership": "UP/15602/93/359/259101/2019-20/CL"
    },
    {
        "id": 375,
        "name": "Dr. Shailja Shukla",
        "membership": "UP/5913/93/73/100400/2003-04/CL"
    },
    {
        "id": 376,
        "name": "Dr. Shailja Singh",
        "membership": "UP/8131/93/123/140174/2008-09/CL"
    },
    {
        "id": 377,
        "name": "Dr. Shalabh Kumar",
        "membership": "UP/3449/93/28/56986/1996-97/CL"
    },
    {
        "id": 378,
        "name": "Dr. Shalini Jain",
        "membership": "UP/4511/93/55/71902/1999-00/CL"
    },
    {
        "id": 379,
        "name": "Dr. Hantanu Dutt",
        "membership": "UP/11736/93/264/189489/2013-14/L"
    },
    {
        "id": 380,
        "name": "Dr. Sharad Gupta",
        "membership": "UP/12177/93/297/195618/2014-15/L"
    },
    {
        "id": 381,
        "name": "Dr. Shariq Arshad",
        "membership": "UP/11737/93/265/189490/2013-14/L"
    },
    {
        "id": 382,
        "name": "Dr. Shashi Rastogi",
        "membership": "UP/16409/93/377/269634/2021-22/CL"
    },
    {
        "id": 383,
        "name": "Dr. Shazi Khwaja",
        "membership": "UP/12162/93/282/195588/2014-15/CL"
    },
    {
        "id": 384,
        "name": "Dr. Sheetal Singh",
        "membership": "UP/11750/93/278/189505/2013-14/CL"
    },
    {
        "id": 385,
        "name": "Dr. Shefali Singh",
        "membership": "UP/10356/93/225/170526/2012-13/CL"
    },
    {
        "id": 386,
        "name": "Dr. Sheikh Nizamuddin Mustafa",
        "membership": "UP/14199/93/343/232548/2017-18/CL"
    },
    {
        "id": 387,
        "name": "Dr. Shilpa Agarwal",
        "membership": "UP/11057/93/247/183780/2013-14/CL"
    },
    {
        "id": 388,
        "name": "Dr. Shita Agarwal",
        "membership": "UP/11234/93/248/186419/2013-14/CL"
    },
    {
        "id": 389,
        "name": "Dr. Shivam Bhardwaj",
        "membership": "UP/16782/93/382/275869/2021-22/L"
    },
    {
        "id": 390,
        "name": "Dr. Shivani Garg",
        "membership": "UP/8578/93/167/144659/2009-10/CL"
    },
    {
        "id": 391,
        "name": "Dr. Shivank Maheswari",
        "membership": "UP/16779/93/379/275866/2021-22/CL"
    },
    {
        "id": 392,
        "name": "Dr. Shruti Khanna",
        "membership": "UP/4403/93/53/70392/1999-00/CL"
    },
    {
        "id": 393,
        "name": "Dr. Shubhangi Agarwal",
        "membership": "UP/8126/93/118/140151/2008-09/CL"
    },
    {
        "id": 394,
        "name": "Dr. Shuaib Mohammad",
        "membership": "UP/15604/93/361/259103/2019-20/CL"
    },
    {
        "id": 395,
        "name": "Dr. Hubham Garg",
        "membership": "UP/12303/93/301/199735/2014-15/L"
    },
    {
        "id": 396,
        "name": "Dr. Shubhendu Gupta",
        "membership": "UP/12960/93/323/213166/2016-17/CL"
    },
    {
        "id": 397,
        "name": "Dr. Shubhra Agarwal",
        "membership": "UP/12479/93/312/203227/2015-16/CL"
    },
    {
        "id": 398,
        "name": "Dr. Shujauddin Khan",
        "membership": "UP/9700/93/200/157803/2011-12/L"
    },
    {
        "id": 399,
        "name": "Dr. Shweta Chaturvedi Sharma",
        "membership": "UP/7977/93/108/137702/2008-09/CL"
    },
    {
        "id": 400,
        "name": "Dr. Shweta Bhmalik",
        "membership": "UP/17781/93/399/296765/2023-24/CL"
    },
    {
        "id": 401,
        "name": "Dr. Shyamoli Dutta",
        "membership": "UP/12471/93/305/203217/2015-16/L"
    },
    {
        "id": 402,
        "name": "Dr. Siddharth Deshwal",
        "membership": "UP/18376/93/413/304272/2023-24/CL"
    },
    {
        "id": 403,
        "name": "Dr. Siddharth Mehrotra",
        "membership": "UP/17152/93/393/282809/2021-22/CL"
    },
    {
        "id": 404,
        "name": "Dr. Siddharth Singh",
        "membership": "UP/8126/93/118/140151/2008-09/CL"
    },
    {
        "id": 405,
        "name": "Dr. Sneha Prakash",
        "membership": "UP/18376/93/413/304272/2023-24/CL"
    },
    {
        "id": 406,
        "name": "Dr. Sohrab Khan",
        "membership": "UP/12958/93/321/213162/2016-17/L"
    },
    {
        "id": 407,
        "name": "Dr. Somya Choudhary",
        "membership": "UP/17781/93/399/296765/2023-24/CL"
    },
    {
        "id": 408,
        "name": "Dr. Sonal Agarwal",
        "membership": "UP/13708/93/337/225214/2017-18/CL"
    },
    {
        "id": 409,
        "name": "Dr. Soubhagya Mishra",
        "membership": "UP/14198/93/342/232547/2017-18/L"
    },
    {
        "id": 410,
        "name": "Dr. Stuti Singh",
        "membership": "UP/17783/93/400/296767/2023-24/CL"
    },
    {
        "id": 411,
        "name": "Dr. Subhash Dev",
        "membership": "UP/14776/93/354/247482/2018-19/L"
    },
    {
        "id": 412,
        "name": "Dr. Subhash Singh",
        "membership": "UP/7979/93/110/137704/2008-09/CL"
    },
    {
        "id": 413,
        "name": "Dr. Sudeep Kaur",
        "membership": "UP/8575/93/164/144656/2009-10/CL"
    },
    {
        "id": 414,
        "name": "Dr. Udhir Kumar Middha",
        "membership": "UP/8122/93/114/140143/2008-09/CL"
    },
    {
        "id": 415,
        "name": "Dr. Sudhir Kumar Singh",
        "membership": "UP/10618/93/234/176004/2012-13/CL"
    },
    {
        "id": 416,
        "name": "Dr. Sugandha Choudhry",
        "membership": "UP/15606/93/363/259105/2019-20/CL"
    },
    {
        "id": 417,
        "name": "Dr. Sugandha Singh",
        "membership": "UP/9919/93/209/160131/2011-12/CL"
    },
    {
        "id": 418,
        "name": "Dr. Suman Agarwal",
        "membership": "UP/9914/93/204/160126/2011-12/CL"
    },
    {
        "id": 419,
        "name": "Dr. Sumit Gupta",
        "membership": "UP/17783/93/400/296767/2023-24/CL"
    },
    {
        "id": 420,
        "name": "Dr. Sumnesh Rastogi",
        "membership": "UP/11048/93/238/183771/2013-14/L"
    },
    {
        "id": 421,
        "name": "Dr. Suneel Kumar Gupta",
        "membership": "UP/7980/93/111/137705/2008-09/CL"
    },
    {
        "id": 422,
        "name": "Dr. Sunil Gupta",
        "membership": "UP/11751/93/279/189506/2013-14/CL"
    },
    {
        "id": 423,
        "name": "Dr. Sunil Kumar",
        "membership": "UP/8525/93/148/143967/2009-10/L"
    },
    {
        "id": 424,
        "name": "Dr. Sunil Kumar",
        "membership": "UP/8529/93/152/143974/2009-10/L"
    },
    {
        "id": 425,
        "name": "Dr. Sunil Kumar Khatar",
        "membership": "UP/11739/93/267/189492/2013-14/L"
    },
    {
        "id": 426,
        "name": "Dr. Sunil Sharma",
        "membership": "UP/8138/93/130/140183/2008-09/L"
    },
    {
        "id": 427,
        "name": "Dr. Suresh Katiyamoorthy",
        "membership": "UP/3446/93/25/56983/1996-97/L"
    },
    {
        "id": 428,
        "name": "Dr. Sushant Shridhar",
        "membership": "UP/11241/93/255/186426/2013-14/CL"
    },
    {
        "id": 429,
        "name": "Dr. Sushma Rathi",
        "membership": "UP/13558/93/328/222709/2017-18/CL"
    },
    {
        "id": 430,
        "name": "Dr. Sushyant Singh",
        "membership": "UP/8131/93/123/140174/2008-09/CL"
    },
    {
        "id": 431,
        "name": "Dr. Swechcha Bansal",
        "membership": "UP/18382/93/419/304278/2023-24/CL"
    },
    {
        "id": 432,
        "name": "Dr. Syed Asmat Ali",
        "membership": "UP/14670/93/350/242669/2017-18/CL"
    },
    {
        "id": 433,
        "name": "Dr. Syed Niaz Hasan",
        "membership": "UP/9916/93/206/160128/2011-12/L"
    },
    {
        "id": 434,
        "name": "Dr. Taj Singh",
        "membership": "UP/12170/93/290/195601/2014-15/L"
    },
    {
        "id": 435,
        "name": "Dr. Tariq Ahmad",
        "membership": "UP/13174/93/324/214249/2016-17/CL"
    },
    {
        "id": 436,
        "name": "Dr. Tarun Agarwal",
        "membership": "UP/3255/93/14/52897/1996-97/L"
    },
    {
        "id": 437,
        "name": "Dr. Tej Pal Singh",
        "membership": "UP/9915/93/205/160127/2011-12/L"
    },
    {
        "id": 438,
        "name": "Dr. Trique Naseem",
        "membership": "UP/10255/93/217/167485/2012-13/L"
    },
    {
        "id": 439,
        "name": "Dr. Tushar Gupta",
        "membership": "UP/16355/93/369/269200/2021-22/CL"
    },
    {
        "id": 440,
        "name": "Dr. Udaivir Singh",
        "membership": "UP/4507/93/63/71898/1999-00/L"
    },
    {
        "id": 441,
        "name": "Dr. Umar Farooque",
        "membership": "UP/12474/93/308/203220/2015-16/L"
    },
    {
        "id": 442,
        "name": "Dr. Umesh Chandra Rastogi",
        "membership": "UP/6016/93/37/101937/2003-04/L"
    },
    {
        "id": 443,
        "name": "Dr. V.S. Dixit",
        "membership": "UP/10610/93/226/175994/2012-13/L"
    },
    {
        "id": 444,
        "name": "Dr. Vaibhav Gupta",
        "membership": "UP/12477/93/310/203225/2015-16/L"
    },
    {
        "id": 445,
        "name": "Dr. Vandana Tiwari",
        "membership": "UP/16355/93/369/269200/2021-22/CL"
    },
    {
        "id": 446,
        "name": "Dr. Vibha Malik",
        "membership": "UP/10619/93/235/176005/2012-13/CL"
    },
    {
        "id": 447,
        "name": "Dr. Vibhour Jain",
        "membership": "UP/6025/93/82/101946/2003-04/CL"
    },
    {
        "id": 448,
        "name": "Dr. Vidhi Agarwal",
        "membership": "UP/11748/93/276/189502/2013-14/CL"
    },
    {
        "id": 449,
        "name": "Dr. Vidushi Gupta",
        "membership": "UP/7982/93/113/137707/2008-09/CL"
    },
    {
        "id": 450,
        "name": "Dr. Vijay Kumar Goel",
        "membership": "UP/11237/93/251/186422/2013-14/CL"
    },
    {
        "id": 451,
        "name": "Dr. Vijay Agarwal",
        "membership": "UP/10355/93/224/170525/2012-13/CL"
    },
    {
        "id": 452,
        "name": "Dr. Vijaydhar",
        "membership": "UP/6614/93/93/108250/2004-05/CL"
    },
    {
        "id": 453,
        "name": "Dr. Vijendra Singh",
        "membership": "UP/15603/93/360/259102/2019-20/CL"
    },
    {
        "id": 454,
        "name": "Dr. Vikas Gupta",
        "membership": "UP/3545/93/29/58356/1996-97/L"
    },
    {
        "id": 455,
        "name": "Dr. Vikram Singhal",
        "membership": "UP/14203/93/347/232552/2017-18/CL"
    },
    {
        "id": 456,
        "name": "Dr. Vimita Agarwal",
        "membership": "UP/9205/93/184/149172/2009-10/CL"
    },
    {
        "id": 457,
        "name": "Dr. Vinamra Gupta",
        "membership": "UP/17784/93/401/296768/2023-24/L"
    },
    {
        "id": 458,
        "name": "Dr. Vinamra Singhal",
        "membership": "UP/16791/93/391/275878/2021-22/CL"
    },
    {
        "id": 459,
        "name": "Dr. Vinay Kumar",
        "membership": "UP/9202/93/181/149169/2009-10/L"
    },
    {
        "id": 460,
        "name": "Dr. Vinay Kumar Gupta",
        "membership": "UP/3257/93/15/52898/1996-97/L"
    },
    {
        "id": 461,
        "name": "Dr. Vinay Maheshwari",
        "membership": "UP/7976/93/107/137701/2008-09/L"
    },
    {
        "id": 462,
        "name": "Dr. Vineet Garg",
        "membership": "UP/8578/93/167/144659/2009-10/CL"
    },
    {
        "id": 463,
        "name": "Dr. Vineeta Agarwal",
        "membership": "UP/8417/93/146/143270/2009-10/CL"
    },
    {
        "id": 464,
        "name": "Dr. Vinita Agarwal",
        "membership": "UP/8282/93/142/140829/2008-09/CL"
    },
    {
        "id": 465,
        "name": "Dr. Vinod Singh",
        "membership": "UP/8724/93/173/146531/2009-10/L"
    },
    {
        "id": 466,
        "name": "Dr. Virag Srivastava",
        "membership": "UP/11746/93/274/189500/2013-14/CL"
    },
    {
        "id": 467,
        "name": "Dr. Vishal Rastogi",
        "membership": "UP/9209/93/188/149178/2009-10/CL"
    },
    {
        "id": 468,
        "name": "Dr. Vishnu Saran",
        "membership": "UP/4400/93/50/70389/1999-00/L"
    },
    {
        "id": 469,
        "name": "Dr. Vivek Goyal",
        "membership": "UP/10615/93/231/176000/2012-13/CL"
    },
    {
        "id": 470,
        "name": "Dr. Wahab Shadma khan",
        "membership": "UP/13562/93/332/222716/2017-18/L"
    },
    {
        "id": 471,
        "name": "Dr. Wajahat Qazi",
        "membership": "UP/8571/93/160/144652/2009-10/L"
    },
    {
        "id": 472,
        "name": "Dr. Yogendra Punja",
        "membership": "UP/10619/93/235/176005/2012-13/CL"
    },
    {
        "id": 473,
        "name": "Dr. Yogesh Chandra Gupta",
        "membership": "UP/4402/93/52/70391/1999-00/CL"
    },
    {
        "id": 474,
        "name": "Dr. Yogesh Pandey",
        "membership": "UP/11723/93/263/189326/2013-14/CL"
    },
    {
        "id": 475,
        "name": "Dr. Yusufali Tyagi",
        "membership": "UP/16781/93/381/275868/2021-22/L"
    },
    {
        "id": 476,
        "name": "Dr. Zara Ansari",
        "membership": "UP/18379/93/416/304275/2023-24/CL"
    }
];
const __TURBOPACK__default__export__ = membersData;
}),
"[project]/src/utils/searchUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utility to check if a member matches a search query.
 * 
 * Supports flexible searches such as:
 * - "cp singh" matching "Dr. C.P. Singh" or "Dr. C.P.Singh"
 * - "a.k. singh" matching "ak singh" or "ak"
 * - membership numbers (e.g. "UP/6678", "6678")
 * - partial names, doctor title variations, and any order of keywords
 */ // Helper to remove punctuation (periods, commas, hyphens, slashes, etc.) and excess spaces
__turbopack_context__.s([
    "compactText",
    ()=>compactText,
    "matchesMember",
    ()=>matchesMember,
    "normalizeText",
    ()=>normalizeText
]);
const normalizeText = (text = '')=>{
    return String(text).toLowerCase().replace(/[.,\-_/\\()]/g, ' ').replace(/\s+/g, ' ').trim();
};
const compactText = (text = '')=>{
    return String(text).toLowerCase().replace(/[^a-z0-9]/g, '');
};
const matchesMember = (member, query)=>{
    if (!query) return true;
    const rawQuery = query.trim().toLowerCase();
    if (!rawQuery) return true;
    const rawTarget = `${member.name || ''} ${member.membership || ''}`.toLowerCase();
    // 1. Direct raw substring match (fast path)
    if (rawTarget.includes(rawQuery)) {
        return true;
    }
    // 2. Compact match (ignores all spaces, dots, dashes, slashes, e.g. "cpsingh" <-> "dr.c.p.singh")
    const compactQ = compactText(rawQuery);
    const compactT = compactText(rawTarget);
    if (compactQ && compactT.includes(compactQ)) {
        return true;
    }
    // 3. Token-based normalized match:
    // All search words (normalized without punctuation) must exist in the normalized target
    const normalizedTarget = normalizeText(rawTarget);
    const queryTokens = normalizeText(rawQuery).split(' ').filter(Boolean);
    if (queryTokens.length > 0) {
        const allTokensMatch = queryTokens.every((token)=>{
            // Check if token exists in normalized target with spaces
            if (normalizedTarget.includes(token)) return true;
            // Or check compact token inside compact target
            const cToken = compactText(token);
            return cToken && compactT.includes(cToken);
        });
        if (allTokensMatch) {
            return true;
        }
    }
    return false;
};
}),
"[project]/src/components/MembersDirectorySection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MembersDirectorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$membersData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/membersData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/searchUtils.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MEMBERS_PER_PAGE = 24;
function MembersDirectorySection() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const filteredMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!query.trim()) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$membersData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$membersData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((member)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$searchUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchesMember"])(member, query));
    }, [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        query
    ]);
    const totalPages = Math.ceil(filteredMembers.length / MEMBERS_PER_PAGE);
    const visibleMembers = filteredMembers.slice((currentPage - 1) * MEMBERS_PER_PAGE, currentPage * MEMBERS_PER_PAGE);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentPage > totalPages && totalPages > 0) setCurrentPage(totalPages);
    }, [
        currentPage,
        totalPages
    ]);
    const pageNumbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (totalPages <= 7) return Array.from({
            length: totalPages
        }, (_, index)=>index + 1);
        const pages = new Set([
            1,
            totalPages,
            currentPage,
            currentPage - 1,
            currentPage + 1
        ]);
        return [
            ...pages
        ].filter((page)=>page > 0 && page <= totalPages).sort((a, b)=>a - b);
    }, [
        currentPage,
        totalPages
    ]);
    const goToPage = (page)=>{
        setCurrentPage(page);
        const element = document.getElementById('members-directory-section');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "members-directory-section",
        className: "py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-slate-50/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-aos": "fade-up",
                    className: "text-center max-w-2xl mx-auto mb-8 sm:mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-semibold mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-3.5 h-3.5 text-emerald-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Fraternity Roster"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-3xl font-bold font-libre tracking-tight text-slate-900",
                            children: [
                                "IMA Moradabad",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600",
                                    children: "Members Directory"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2.5 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto",
                            children: "Search registered life members, specialists, and medical consultants affiliated with IMA Moradabad."
                        }, void 0, false, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "100",
                    className: "max-w-4xl mx-auto mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full sm:w-2/3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search doctor by name or membership number...",
                                        className: "w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50/50"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-medium text-slate-600 whitespace-nowrap bg-slate-100 px-3 py-1.5 rounded-full",
                                children: [
                                    "Showing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            filteredMembers.length === 0 ? 0 : (currentPage - 1) * MEMBERS_PER_PAGE + 1,
                                            " - ",
                                            Math.min(currentPage * MEMBERS_PER_PAGE, filteredMembers.length)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 83,
                                        columnNumber: 23
                                    }, this),
                                    " of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: filteredMembers.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 83,
                                        columnNumber: 190
                                    }, this),
                                    " members"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                filteredMembers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-slate-200 text-center text-slate-600 text-sm shadow-sm",
                    children: [
                        'No doctors match your query "',
                        query,
                        '". Please search with a different doctor name or UP membership code.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-aos": "fade-up",
                    "data-aos-delay": "150",
                    className: "max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border-collapse text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-3 w-[6%] text-center",
                                                    children: "No."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 w-[22%]",
                                                    children: "Doctor Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 w-[22%]",
                                                    children: "Membership Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-3 w-[6%] text-center border-l border-slate-200",
                                                    children: "No."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 w-[22%]",
                                                    children: "Doctor Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 w-[22%]",
                                                    children: "Membership Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-slate-100",
                                        children: Array.from({
                                            length: Math.ceil(visibleMembers.length / 2)
                                        }, (_, index)=>{
                                            const leftMember = visibleMembers[index];
                                            const rightMember = visibleMembers[index + Math.ceil(visibleMembers.length / 2)];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-emerald-50/40 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-center text-slate-500 font-medium",
                                                        children: leftMember?.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-4 font-semibold text-slate-900",
                                                        children: leftMember?.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-4 font-mono text-[11px] text-slate-600",
                                                        children: leftMember?.membership
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-3 text-center text-slate-500 font-medium border-l border-slate-200",
                                                        children: rightMember?.id || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-4 font-semibold text-slate-900",
                                                        children: rightMember?.name || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-2.5 px-4 font-mono text-[11px] text-slate-600",
                                                        children: rightMember?.membership || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, `paired-${leftMember?.id || index}`, true, {
                                                fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:hidden gap-3",
                            children: visibleMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-xl border border-slate-200 shadow-xs relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-3 right-3 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md",
                                            children: [
                                                "#",
                                                member.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-slate-900 text-sm mb-1 pr-10",
                                            children: member.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-xs text-slate-500",
                                            children: member.membership
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `m-${member.id}`, true, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-1.5 sm:gap-2 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>goToPage(currentPage - 1),
                                    disabled: currentPage === 1,
                                    className: "px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Prev"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: pageNumbers.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                index > 0 && page - pageNumbers[index - 1] > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-1 text-slate-400 text-xs",
                                                    children: "…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>goToPage(page),
                                                    className: `min-w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${currentPage === page ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'}`,
                                                    children: page
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, page, true, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 155,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>goToPage(currentPage + 1),
                                    disabled: currentPage === totalPages,
                                    className: "px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MembersDirectorySection.jsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/MembersDirectorySection.jsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MembersDirectorySection.jsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MembersDirectorySection.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/views/About.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-ssr] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-pen.js [app-ssr] (ecmascript) <export default as ClipboardPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedCounter.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MembersDirectorySection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MembersDirectorySection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cloudinary.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function About() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const storyParam = searchParams.get('story');
    const [selectedStoryId, setSelectedStoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(storyParam ? parseInt(storyParam, 10) || 1 : 1);
    const [activeStoryMedia, setActiveStoryMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (storyParam) {
            const parsed = parseInt(storyParam, 10);
            setSelectedStoryId(parsed || 1);
            const element = document.getElementById('campaign-story');
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }, [
        storyParam
    ]);
    const stats = [
        {
            target: 5000,
            suffix: '+',
            label: 'Active Members',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            target: 95,
            suffix: '+',
            label: 'Years Legacy',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
        },
        {
            target: 500,
            suffix: '+',
            label: 'Events Annually',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            target: 1702,
            suffix: '+',
            label: 'Active Branches',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        }
    ];
    const objectives = [
        'Promote and advance medical sciences in all branches across Moradabad',
        'Maintain the honor, dignity and interest of the medical profession',
        'Work towards abolishing compartmentalization in medical education and services',
        'Achieve equality among all members of the medical profession',
        'Promote public health and medical education throughout the region'
    ];
    const publications = [
        {
            title: 'Journal of Indian Medical Association',
            desc: 'Monthly scientific journal indexed in Index Medicus'
        },
        {
            title: 'Aadya Swasthya',
            desc: 'Monthly publication for general public in Hindi'
        },
        {
            title: 'Your Health',
            desc: 'Monthly publication for general public in English'
        }
    ];
    const schemes = [
        {
            name: 'IMA National Social Security Scheme',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            name: 'IMA National Family Welfare Scheme',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            name: 'IMA National PP Scheme',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
        },
        {
            name: 'IMA National Health Scheme',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"]
        },
        {
            name: 'IMA National Pension Scheme',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        }
    ];
    const wings = [
        {
            name: 'IMA College of General Practitioners',
            desc: 'For specialists and general practitioners'
        },
        {
            name: 'IMA Academy of Medical Specialties',
            desc: 'Advanced medical education'
        },
        {
            name: 'Sinha Institute',
            desc: 'Keeping members abreast of latest technologies'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-b from-white via-emerald-50/30 to-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                backgroundSize: "32px 32px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-28 -right-28 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-6xl mx-auto py-14 px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            "data-aos": "fade-up",
                            "data-aos-duration": "700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "   inline-flex   items-center   gap-2   bg-white/15   backdrop-blur-md   border border-white/20   px-4   py-2   rounded-full   mb-4   shadow-sm   ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                            className: "w-4 h-4 sm:w-5 sm:h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs sm:text-sm font-semibold tracking-wide",
                                            children: "Since 1928"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "   text-2xl   sm:text-3xl   md:text-4xl   font-bold   font-libre   tracking-normal   mb-3   ",
                                    children: "About IMA Moradabad"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "   text-sm   sm:text-base   md:text-lg   text-emerald-100   max-w-2xl   mx-auto   leading-relaxed   font-playfair   tracking-wide   mb-6   ",
                                    children: "India's largest and most trusted medical association serving Moradabad, Uttar Pradesh - 244001"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center gap-2.5 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("overview"),
                                            className: `
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "overview" ? "bg-white text-emerald-600 shadow-lg" : "bg-white/15 text-white border border-white/20 hover:bg-white/25"}
                    `,
                                            children: "Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("objectives"),
                                            className: `
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "objectives" ? "bg-white text-emerald-600 shadow-lg" : "bg-white/15 text-white border border-white/20 hover:bg-white/25"}
                    `,
                                            children: "Objectives"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("services"),
                                            className: `
                        px-5
                        py-2
                        sm:px-6
                        sm:py-2.5
                        rounded-full
                        text-sm
                        sm:text-base
                        font-semibold
                        transition-all
                        duration-300
                        ${activeTab === "services" ? "bg-white text-emerald-600 shadow-lg" : "bg-white/15 text-white border border-white/20 hover:bg-white/25"}
                    `,
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5",
                    children: stats.map((stat, index)=>{
                        const Icon = stat.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-aos": "fade-up",
                            "data-aos-delay": (index + 1) * 100,
                            "data-aos-duration": "600",
                            className: "   group   bg-white   rounded-xl   sm:rounded-2xl   shadow-lg   hover:shadow-xl   border   border-emerald-50   px-3   py-4   sm:px-4   sm:py-5   md:px-5   md:py-5   text-center      transition-all   duration-300   ease-out      hover:-translate-y-1.5   ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "   w-9   h-9   sm:w-10   sm:h-10   mx-auto   mb-2   rounded-full   bg-emerald-50   flex   items-center   justify-center      transition-all   duration-300      group-hover:bg-emerald-600   group-hover:scale-110   ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "   w-5   h-5   sm:w-5.5   sm:h-5.5   text-emerald-600      transition-colors   duration-300      group-hover:text-white   "
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "   text-xl   sm:text-2xl   md:text-2xl   font-bold   text-gray-900   leading-tight   mb-1   ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        target: stat.target,
                                        suffix: stat.suffix,
                                        duration: 2000
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 346,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "   text-[11px]   sm:text-xs   md:text-sm   text-gray-500   font-medium   leading-tight   ",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 355,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/views/About.jsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20",
                children: [
                    activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "campaign-story",
                                className: "scroll-mt-24 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-100/80 relative overflow-hidden",
                                "data-aos": "fade-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-2 bg-emerald-50 text-emerald-700 rounded-xl",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardPen$3e$__["ClipboardPen"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 397,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 396,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50/80 px-2.5 py-0.5 rounded-full",
                                                                children: "Featured Public Initiative"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 400,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg sm:text-xl font-bold text-slate-900 font-libre",
                                                                children: "Public Health Stories & Initiatives (2026–27)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 403,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 395,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedStoryId(1),
                                                        className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${selectedStoryId === 1 ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`,
                                                        children: "Story 1: 15-Day Campaign"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedStoryId(2),
                                                        className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${selectedStoryId === 2 ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`,
                                                        children: "Story 2: School Initiative"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedStoryId(3),
                                                        className: `px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${selectedStoryId === 3 ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`,
                                                        children: "Story 3: School Camps"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 430,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    selectedStoryId === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-12 gap-6 lg:gap-8 items-center animate-in fade-in duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-[4/3]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/welcome-ima.jpg"),
                                                        alt: "Mental Health Awareness Campaign",
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs",
                                                        children: "Session 2026–27 | IMA Moradabad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-7 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 459,
                                                                columnNumber: 23
                                                            }, this),
                                                            "15-Day Public Outreach Programme"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-libre leading-snug",
                                                        children: "Mental Health Awareness Campaign | IMA Moradabad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 462,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-600 text-sm sm:text-[15px] space-y-3 leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Led by ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "elected office bearers- with Dr. Anant Rana as President and Dr. Dishanter Goel as Secretary for the year 2026-27"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 32
                                                                    }, this),
                                                                    ", IMA Moradabad continues to champion physician rights and community wellness through meaningful public outreach initiatives."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 467,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "As part of its ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "15-day Mental Health Awareness Campaign"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 40
                                                                    }, this),
                                                                    ", launched around World Mental Health Day on October 10, 2026, IMA Moradabad, in collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, is committed to promoting mental well-being among schoolchildren and the wider community."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Through school visits, interactive sessions on emotional and mental changes, responsible mobile and social media use, and dedicated discussions on police personnel's mental health, the initiative aims to encourage awareness, understanding, and a healthier community."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 473,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2 flex flex-wrap gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/imagegallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm",
                                                                children: [
                                                                    "View Campaign Gallery ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 479,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/videogallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition",
                                                                children: [
                                                                    "Watch Campaign Videos ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                        className: "w-3.5 h-3.5 text-emerald-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 485,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 478,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this),
                                    selectedStoryId === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-12 gap-6 lg:gap-8 items-center animate-in fade-in duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setActiveStoryMedia({
                                                        type: 'image',
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/9ocotober.jpeg'),
                                                        title: 'Press Conference | IMA Bhawan'
                                                    }),
                                                className: "md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-[4/3] cursor-pointer group/mainimg",
                                                title: "Click to view full image",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/9ocotober.jpeg"),
                                                        alt: "IMA Moradabad Press Conference",
                                                        className: "w-full h-full object-cover group-hover/mainimg:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover/mainimg:opacity-100 transition-opacity flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20",
                                                            children: "🔍 Click to view full image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 509,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs pointer-events-none",
                                                        children: "Press Conference | 9 October 2026 | IMA Bhawan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 499,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-7 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 521,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Press & Media Announcement"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-libre leading-snug",
                                                        children: "IMA Moradabad Announces School-Based Mental Health Awareness Campaign"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 524,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-600 text-sm sm:text-[15px] space-y-3 leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "On October 9, 2026, during a press conference held at IMA Bhawan, Moradabad, ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "the elected office bearers of IMA Moradabad for the year 2026–27— Dr. Anant Rana as President, and Dr. Dishanter Goel as Secretary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 102
                                                                    }, this),
                                                                    ", announced that the association would conduct mental health awareness sessions in schools as part of its public outreach initiative."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 529,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Beginning October 10, the initiative aims to educate schoolchildren about mental health, emotional and psychological changes, and the responsible use of mobile phones and social media."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 532,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "In collaboration with the Moradabad Neurosciences Association and Mind Body Foundation, IMA Moradabad is taking this initiative forward to encourage early awareness, emotional well-being, and a healthier future for children."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 535,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 528,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: "🎥 Campaign Media & Video Highlights:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-blue-600 font-medium",
                                                                        children: "Click to play / view"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 541,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'image',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth2.jpeg'),
                                                                                title: 'Mental Health Session Photo'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth2.jpeg"),
                                                                            alt: "Mental health campaign",
                                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 551,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'video',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth2.mp4'),
                                                                                title: 'Campaign Video - Session 2'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth2.mp4"),
                                                                                className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all pointer-events-none",
                                                                                preload: "metadata",
                                                                                muted: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 563,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                        className: "w-3 h-3 fill-current ml-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/About.jsx",
                                                                                        lineNumber: 571,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/About.jsx",
                                                                                    lineNumber: 570,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 569,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'video',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth1.mp4'),
                                                                                title: 'Campaign Video - Session 1'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth1.mp4"),
                                                                                className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all pointer-events-none",
                                                                                preload: "metadata",
                                                                                muted: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 581,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                        className: "w-3 h-3 fill-current ml-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/About.jsx",
                                                                                        lineNumber: 589,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/About.jsx",
                                                                                    lineNumber: 588,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 587,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'video',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth3.mp4'),
                                                                                title: 'Campaign Video - Session 3'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth3.mp4"),
                                                                                className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all pointer-events-none",
                                                                                preload: "metadata",
                                                                                muted: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 599,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                        className: "w-3 h-3 fill-current ml-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/About.jsx",
                                                                                        lineNumber: 607,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/About.jsx",
                                                                                    lineNumber: 606,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 605,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'video',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth4.mp4'),
                                                                                title: 'Campaign Video - Session 4'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth4.mp4"),
                                                                                className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all pointer-events-none",
                                                                                preload: "metadata",
                                                                                muted: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 617,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                        className: "w-3 h-3 fill-current ml-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/About.jsx",
                                                                                        lineNumber: 625,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/About.jsx",
                                                                                    lineNumber: 624,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 623,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 613,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'video',
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/mentalhealth5.mp4'),
                                                                                title: 'Campaign Video - Session 5'
                                                                            }),
                                                                        className: "relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group bg-slate-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/mentalhealth5.mp4"),
                                                                                className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all pointer-events-none",
                                                                                preload: "metadata",
                                                                                muted: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 635,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-6 h-6 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xs",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                                        className: "w-3 h-3 fill-current ml-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/views/About.jsx",
                                                                                        lineNumber: 643,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/views/About.jsx",
                                                                                    lineNumber: 642,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 641,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 631,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2 flex flex-wrap gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/imagegallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm",
                                                                children: [
                                                                    "View Press Gallery ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 655,
                                                                        columnNumber: 44
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 651,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/videogallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition",
                                                                children: [
                                                                    "Watch Press Coverage ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                        className: "w-3.5 h-3.5 text-emerald-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 661,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 657,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 650,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this),
                                    selectedStoryId === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-12 gap-6 lg:gap-8 items-center animate-in fade-in duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setActiveStoryMedia({
                                                        type: 'image',
                                                        src: '/561ff335-03db-4316-8247-2814caa5a806.jpg',
                                                        title: 'Mental Health Awareness Camps in Schools (CL Gupta World School)'
                                                    }),
                                                className: "md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 aspect-[4/3] cursor-pointer group/mainimg",
                                                title: "Click to view full image",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])("/561ff335-03db-4316-8247-2814caa5a806.jpg"),
                                                        alt: "Mental Health Awareness Camps in Schools",
                                                        className: "w-full h-full object-cover group-hover/mainimg:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 675,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/40 opacity-0 group-hover/mainimg:opacity-100 transition-opacity flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20",
                                                            children: "🔍 Click to view full image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 681,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 680,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs pointer-events-none",
                                                        children: "World Mental Health Day | 10 October 2026 | School Sessions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 685,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 670,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-7 space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 692,
                                                                columnNumber: 23
                                                            }, this),
                                                            "World Mental Health Day Observance"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 691,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-libre leading-snug",
                                                        children: "IMA Moradabad Conducts Mental Health Awareness Camps in Schools"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 695,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-600 text-sm sm:text-[15px] space-y-3 leading-relaxed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "On October 10, 2026, in observance of World Mental Health Day, IMA Moradabad organized mental health awareness camps at three schools in Moradabad. ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "Dr. Dishanter Goel as Secretary of IMA Moradabad (2026–27)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 173
                                                                    }, this),
                                                                    ", conducted the session at CL Gupta World School, ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "Dr. Nimish Gupta"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 339
                                                                    }, this),
                                                                    " conducted the session at PMS School and",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-slate-900 font-semibold",
                                                                        children: "Dr. Kartikaya Gupta"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 701,
                                                                        columnNumber: 453
                                                                    }, this),
                                                                    ", led the session at SS Children’s Academy."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 700,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "During these sessions, students were educated about the importance of mental health, emotional well-being, and the need to discuss mental health concerns openly."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 703,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "The initiative aimed to raise awareness among children, dispel misconceptions about mental health, and encourage them to seek guidance and support whenever needed."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 706,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 699,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-semibold text-slate-500 mb-2 flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: "📸 Glimpses from the Sessions:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-blue-600 font-medium",
                                                                        children: "Click to view"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 714,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 712,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'image',
                                                                                src: '/WhatsApp Image 2026-10-10 at 5.03.59 PM.jpeg',
                                                                                title: 'School Camp Session Glimpse 1'
                                                                            }),
                                                                        className: "aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm group hover:border-purple-500 transition-all cursor-pointer",
                                                                        title: "Click to view full image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/WhatsApp Image 2026-10-10 at 5.03.59 PM.jpeg'),
                                                                            alt: "School camp session 1",
                                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 722,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 717,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'image',
                                                                                src: '/WhatsApp Image 2026-10-10 at 5.03.57 PM.jpeg',
                                                                                title: 'School Camp Session Glimpse 2'
                                                                            }),
                                                                        className: "aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm group hover:border-purple-500 transition-all cursor-pointer",
                                                                        title: "Click to view full image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/WhatsApp Image 2026-10-10 at 5.03.57 PM.jpeg'),
                                                                            alt: "School camp session 2",
                                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 733,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 728,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'image',
                                                                                src: '/WhatsApp Image 2026-10-10 at 5.03.57 PM (1).jpeg',
                                                                                title: 'School Camp Session Glimpse 3'
                                                                            }),
                                                                        className: "aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm group hover:border-purple-500 transition-all cursor-pointer",
                                                                        title: "Click to view full image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/WhatsApp Image 2026-10-10 at 5.03.57 PM (1).jpeg'),
                                                                            alt: "School camp session 3",
                                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 744,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 739,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>setActiveStoryMedia({
                                                                                type: 'image',
                                                                                src: '/WhatsApp Image 2026-10-10 at 5.03.54 PM.jpeg',
                                                                                title: 'School Camp Session Glimpse 4'
                                                                            }),
                                                                        className: "aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm group hover:border-purple-500 transition-all cursor-pointer",
                                                                        title: "Click to view full image",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/WhatsApp Image 2026-10-10 at 5.03.54 PM.jpeg'),
                                                                            alt: "School camp session 4",
                                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 755,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 716,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 711,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2 flex flex-wrap gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                to: "/imagegallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm",
                                                                children: [
                                                                    "View Camps Gallery ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 769,
                                                                        columnNumber: 44
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 765,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                to: "/videogallery?year=2026%2F27",
                                                                className: "inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition",
                                                                children: [
                                                                    "Watch Session Videos ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                                        className: "w-3.5 h-3.5 text-emerald-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 775,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 771,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 764,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 690,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 669,
                                        columnNumber: 17
                                    }, this),
                                    activeStoryMedia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200",
                                        onClick: ()=>setActiveStoryMedia(null),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-sm font-semibold truncate",
                                                            children: activeStoryMedia.title || "Mental Health Campaign"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 793,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveStoryMedia(null),
                                                            className: "p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 800,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 796,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/About.jsx",
                                                    lineNumber: 792,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 bg-black flex items-center justify-center min-h-[300px] max-h-[75vh]",
                                                    children: activeStoryMedia.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        src: activeStoryMedia.src,
                                                        controls: true,
                                                        autoPlay: true,
                                                        className: "max-h-[70vh] w-auto max-w-full rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 805,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: activeStoryMedia.src,
                                                        alt: activeStoryMedia.title,
                                                        className: "max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 812,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/views/About.jsx",
                                                    lineNumber: 803,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/views/About.jsx",
                                            lineNumber: 788,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 784,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aos": "fade-right",
                                        "data-aos-duration": "700",
                                        className: "bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 834,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-emerald-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 838,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full",
                                                                        children: "Heritage & Roots"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 842,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl sm:text-2xl font-bold text-gray-900 font-libre mt-0.5",
                                                                        children: "Our Legacy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 845,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 841,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 837,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-slate-600 leading-relaxed space-y-2.5 text-xs sm:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Founded nationally in ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "1928"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    ", the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Indian Medical Association (IMA)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 72
                                                                    }, this),
                                                                    " is India's premier body of modern medicine doctors. The Moradabad Branch has proudly championed healthcare standards in Uttar Pradesh for decades."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 852,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Today, IMA unites over ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-emerald-600",
                                                                        children: "300,000+ doctors"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 46
                                                                    }, this),
                                                                    " across 28 states and ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-emerald-600",
                                                                        children: "1,702+ local branches"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 140
                                                                    }, this),
                                                                    ", fostering clinical excellence and ethical medical practice."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 855,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 851,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 836,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50/80 px-3 py-2 rounded-xl text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-lg sm:text-xl font-bold text-emerald-600 leading-tight",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    target: 95,
                                                                    suffix: "+",
                                                                    duration: 1800
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 864,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-500 font-medium",
                                                                children: "Years Legacy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 867,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 863,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50/80 px-3 py-2 rounded-xl text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-lg sm:text-xl font-bold text-teal-600 leading-tight",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    target: 1702,
                                                                    suffix: "+",
                                                                    duration: 1800
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 870,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-slate-500 font-medium",
                                                                children: "Active Branches"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 873,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 869,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 862,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 829,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-aos": "fade-left",
                                        "data-aos-duration": "700",
                                        className: "bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 884,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-11 h-11 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center text-yellow-300 shadow-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                    className: "w-5 h-5 fill-current"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 888,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold uppercase tracking-wider text-emerald-200 bg-white/10 px-2 py-0.5 rounded-full",
                                                                        children: "Future & Purpose"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 892,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl sm:text-2xl font-bold font-libre mt-0.5",
                                                                        children: "Our Vision"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 895,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 891,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-emerald-50 leading-relaxed space-y-2.5 text-xs sm:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-medium text-white/95",
                                                                children: "To safeguard medical fraternity honor and autonomy while making compassionate, state-of-the-art healthcare accessible to every citizen of Moradabad."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 902,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: "Through regular free OPD camps, accredited CME programs, emergency blood bank services, and young doctor mentorship, we aim to build a healthier society."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 905,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 901,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 886,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 pt-4 border-t border-white/20 grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/15",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-lg sm:text-xl font-bold text-white leading-tight",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    target: 5000,
                                                                    suffix: "+",
                                                                    duration: 1800
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 915,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 914,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-emerald-100 font-medium",
                                                                children: "Fraternity Doctors"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 917,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 913,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center border border-white/15",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-lg sm:text-xl font-bold text-yellow-300 leading-tight",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    target: 500,
                                                                    suffix: "+",
                                                                    duration: 1800
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 920,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-emerald-100 font-medium",
                                                                children: "Health Events"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 923,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 919,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 912,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 879,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 827,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center max-w-2xl mx-auto mb-10 sm:mb-12",
                                        "data-aos": "fade-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-semibold mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 938,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Leadership Messages"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 939,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 937,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl sm:text-2xl md:text-3xl font-bold font-libre tracking-tight text-gray-900",
                                                children: [
                                                    "Words from",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600",
                                                        children: "Our Office Bearers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 943,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 941,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-14 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-2.5 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 947,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 max-w-xl mx-auto",
                                                children: "Guiding IMA Moradabad towards clinical excellence, physician welfare, and impactful community outreach."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 948,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 933,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "100",
                                                className: "bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-200 group-hover:ring-emerald-500 transition-all flex-shrink-0 shadow-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/file_0000000014848208836ddf30894e8069 (1).png'),
                                                                            alt: "Dr. Anant Rana - President IMA Moradabad",
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 966,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 965,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block",
                                                                                children: "President (2026-27)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 973,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-base font-bold text-gray-900 mt-0.5 truncate",
                                                                                children: "Dr. Anant Rana"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 976,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-slate-500 font-medium truncate",
                                                                                children: "MBBS, MD (Psychiatry)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 979,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 972,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 964,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3",
                                                                children: '"To establish IMA Moradabad as a premier medical association championing clinical excellence, ethical practices, and accessible quality healthcare for every citizen."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 986,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate",
                                                                children: "Adwik Health Center, Ashiyana Phase 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 990,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 962,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/presidentmessage",
                                                        className: "inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-emerald-600 hover:text-emerald-700 border-t border-slate-100 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Read Full Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1000,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 996,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 957,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "200",
                                                className: "bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-200 group-hover:ring-teal-500 transition-all flex-shrink-0 shadow-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/Pi7_dr-dishantar-goel-moradabad-ho-moradabad-psychiatrists-8ivtob85g6.jpeg'),
                                                                            alt: "Dr. Dishanter Goel - Secretary IMA Moradabad",
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1014,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block",
                                                                                children: "Hon. Secretary (2026-27)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1022,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-base font-bold text-gray-900 mt-0.5 truncate",
                                                                                children: "Dr. Dishanter Goel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1025,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-slate-500 font-medium truncate",
                                                                                children: "MBBS, MD (Psychiatry) • K.G.M.C."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1028,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1021,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1013,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3",
                                                                children: '"Our focus is on transparent administration, regular accredited CME sessions, digital member outreach, and impactful community health drives."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate",
                                                                children: "Pragyan Health Center, Gandhi Nagar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1039,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/secretarymessage",
                                                        className: "inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-teal-600 hover:text-teal-700 border-t border-slate-100 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Read Full Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1049,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1050,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-aos": "fade-up",
                                                "data-aos-delay": "300",
                                                className: "bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3.5 mb-3.5 pb-3.5 border-b border-slate-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-cyan-200 group-hover:ring-cyan-500 transition-all flex-shrink-0 shadow-sm",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cloudinary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloudinaryAsset"])('/file_0000000063b08208b822b0557b714332.png'),
                                                                            alt: "Dr. Anurag Dubey - Treasurer IMA Moradabad",
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 1064,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1063,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block",
                                                                                children: "Hon. Treasurer (2026-27)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1071,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "text-base font-bold text-gray-900 mt-0.5 truncate",
                                                                                children: "Dr. Anurag Dubey"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1074,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] text-slate-500 font-medium truncate",
                                                                                children: "MBBS, DCH"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1077,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1070,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1062,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-600 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-3",
                                                                children: '"To establish fiscal discipline, absolute transparency, and sustainable resource management that powers our vital community relief initiatives."'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1084,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 text-[11px] text-slate-500 mb-3 truncate",
                                                                children: "B-818, Lajpat Nagar, Moradabad"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1088,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/treasurer-message",
                                                        className: "inline-flex items-center justify-between w-full pt-3 text-xs font-bold text-cyan-600 hover:text-cyan-700 border-t border-slate-100 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Read Full Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1098,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                className: "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1099,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1094,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1055,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 954,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this),
                    activeTab === 'objectives' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aos": "fade-up",
                                className: "bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-teal-100/20 rounded-full blur-3xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1113,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-13 h-13 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 1119,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1118,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                                className: "w-3 h-3 text-emerald-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1123,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Core Mandate"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1124,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl sm:text-3xl font-bold font-libre text-slate-900",
                                                                        children: "Our Mission & Objectives"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1126,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1121,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit",
                                                        children: "Established under National Constitution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5",
                                                children: objectives.map((objective, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": index * 80,
                                                        className: "group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-emerald-50/60 hover:to-white border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-9 h-9 rounded-xl bg-white group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white border border-emerald-200/60 flex items-center justify-center flex-shrink-0 shadow-xs transition-colors duration-300 mt-0.5",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 1145,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] font-bold text-emerald-700 tracking-wider uppercase",
                                                                        children: [
                                                                            "Objective 0",
                                                                            index + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1148,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-700 text-sm sm:text-base font-medium leading-relaxed mt-1",
                                                                        children: objective
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1151,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 1112,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aos": "fade-up",
                                className: "bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-3xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-13 h-13 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 1169,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1168,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                                className: "w-3 h-3 text-blue-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1173,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Academic Discourse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1174,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1172,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl sm:text-3xl font-bold font-libre text-slate-900",
                                                                        children: "Official Publications"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1176,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit",
                                                        children: "Hindi & English Periodicals"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl",
                                                children: "IMA regularly publishes peer-reviewed research journals, clinical reviews, and healthcare bulletins dedicated to both modern medicine practitioners and community health awareness."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1186,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                                children: publications.map((pub, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": index * 120,
                                                        className: "group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-blue-50/50 hover:to-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 1200,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1199,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors",
                                                                        children: pub.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1202,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-600 text-xs sm:text-sm leading-relaxed",
                                                                        children: pub.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1205,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Read Circulation"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1210,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 1162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 1110,
                        columnNumber: 11
                    }, this),
                    activeTab === 'services' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aos": "fade-up",
                                className: "bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-100/40 to-pink-100/20 rounded-full blur-3xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-13 h-13 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-2.5 py-0.5 rounded-full mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                className: "w-3 h-3 text-purple-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1236,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Member Welfare"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1237,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1235,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl sm:text-3xl font-bold font-libre text-slate-900",
                                                                        children: "Social Security Schemes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1239,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit",
                                                        children: "Fraternity Welfare & Lifelong Security"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1244,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1229,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl",
                                                children: "IMA Moradabad safeguards the interests, family welfare, and financial solidarity of member doctors through structured national security schemes."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                                                children: schemes.map((scheme, index)=>{
                                                    const Icon = scheme.icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": index * 90,
                                                        className: "group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-purple-50/50 hover:to-white border border-slate-200/80 hover:border-purple-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                            className: "w-6 h-6"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 1265,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1264,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                                        children: "Fraternity Benefit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1267,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-slate-900 text-base mt-2.5 group-hover:text-purple-700 transition-colors",
                                                                        children: scheme.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1270,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1263,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Active Enrollment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1275,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1276,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1274,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 1225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aos": "fade-up",
                                className: "bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-slate-100 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-100/40 to-orange-100/20 rounded-full blur-3xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-3.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-13 h-13 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                    className: "w-6 h-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/views/About.jsx",
                                                                    lineNumber: 1293,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1292,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-full mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                                className: "w-3 h-3 text-amber-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1297,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Continuous Learning"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/views/About.jsx",
                                                                                lineNumber: 1298,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1296,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-2xl sm:text-3xl font-bold font-libre text-slate-900",
                                                                        children: "Academic Wings of IMA"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1300,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1295,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full w-fit",
                                                        children: "CME & Specialty Certification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1305,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1290,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl",
                                                children: "Keeping clinicians at the forefront of modern medical science through accredited continuing medical education, clinical masterclasses, and research workshops."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1310,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                                children: wings.map((wing, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-aos": "fade-up",
                                                        "data-aos-delay": index * 110,
                                                        className: "group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white hover:from-amber-50/50 hover:to-white border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/views/About.jsx",
                                                                            lineNumber: 1324,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1323,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-slate-900 text-base mb-2 group-hover:text-amber-700 transition-colors",
                                                                        children: wing.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1326,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-600 text-xs sm:text-sm leading-relaxed",
                                                                        children: wing.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1329,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1322,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-amber-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Academic Program"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1334,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/views/About.jsx",
                                                                        lineNumber: 1335,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/views/About.jsx",
                                                                lineNumber: 1333,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1314,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 1286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-aos": "zoom-in",
                                className: "bg-gradient-to-r from-rose-700 via-red-600 to-rose-700 rounded-2xl shadow-lg p-5 sm:p-7 text-white relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 max-w-3xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-semibold mb-2.5 text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: "w-3 h-3 fill-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1348,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Clinical Standard & Accreditation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/views/About.jsx",
                                                        lineNumber: 1349,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1347,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl sm:text-2xl font-bold font-libre mb-2 text-white",
                                                children: "IMA Hospital Board of India"
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-rose-100 text-xs sm:text-sm leading-relaxed mb-4 max-w-2xl",
                                                children: "IMA Hospital Board of India guides private clinics, nursing homes, and corporate hospitals in Moradabad and Western Uttar Pradesh on biomedical waste regulations, NABH protocols, medicolegal compliance, and highest patient safety benchmarks."
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1354,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contactus",
                                                    className: "px-5 py-2 bg-white text-rose-700 font-bold text-xs rounded-full shadow-md hover:bg-rose-50 transition-all inline-flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Contact Hospital Board Desk"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 1362,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/views/About.jsx",
                                                            lineNumber: 1363,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/views/About.jsx",
                                                    lineNumber: 1358,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 1357,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 1346,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 1344,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 1223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MembersDirectorySection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 1386,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_b82eb1b1._.js.map