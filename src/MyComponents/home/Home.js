import './home.scss'
import {motion} from 'framer-motion';
export default function Home() {

    return (
        <motion.div className="home"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        whileHover={{
            scale: 1.01,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
            <div className="b1">
<div className="img"><img id="b1" src="mygif.gif" alt="" /></div>
            <div class="wrap-collabsible">
            <input id="collapsible" className="toggle" type="checkbox" ></input>
            <label for="collapsible" class="lbl-toggle">BLOG #1 - Circle Animation using CSS (PULSE)</label>
            <div class="collapsible-content">
    <div class="content-inner">
    <h2>WHAT WE ARE WORKING TOWARDS</h2>
<div className="img"><img src="finalresult.png" alt="" /></div>
                <h2>WHAT ANIMATION ACCOMPLISHES</h2>
<div className="img"><img src="pc_offset_200.webp" alt="" /></div>
                <p>For the circle pulsing animation, you'll notice that there is a continuity where as one circle effortlessly fades away another circle prominently arrives to take its place. The way this works isn't by animating a single circle. It is done by animating several circles in sequence.
                
                Basically we will be animating the circles in a loop with different time period.

</p>
                <h2>THE CODE</h2>
<div id="img"><img src="code.png" alt="" /></div>
                
                <h2>THE CONCLUSION</h2>
                <p>The pulsing circle effect is a great example because of how simple it really is. At first glance, creating this effect may look like it will need some JavaScript or an animation defined entirely on the canvas. By taking advantage of the animation-delay property and how it treats negative values, our path is much more simple. All we needed to do was copy/paste a few more circles and alter the animation-delay value each one sported. Simple!</p>
                
    </div>
  </div>
            </div>
            </div>
            <div className="b1" >
<div className="img" ><img id="b2" src="giphy.gif" alt="" /></div>
            <div class="wrap-collabsible">
            <input id="collapsible2" className="toggle" type="checkbox"></input>
            <label for="collapsible2" class="lbl-toggle">BLOG #2 - EVOLVING TECHNOLOGY AND IT'S IMPORTANCE</label>
            <div class="collapsible-content">
    <div class="content-inner">
                <p>The main goal of technology, which brings together tools to promote development, use, and information exchange, is to make tasks easier and to solve many of humanity's problems. We must emphasize how beneficial technology is to our lives as it advances and makes our lives even more convenient.</p>
                <p>Some technologies that can be worked upon:-</p>
                <h2><li>Controlled Artificial Intelligence</li></h2>
                <h2><li>Better machine learning and Nano tech</li></h2>
                <h2><li>Secured networks</li></h2>
<div className="img"><img src="tech2.png" alt="" /></div>
                <p>Also, technology is evolving according to the law of demand! We basically build and improve what the market wants to buy! For me this is an 'out-of-control' way of evolving. We become more and more disconnected from nature and rely more on "dependable" tech. For example, thanks to technological advances humans now are more educated than ever before. But that knowledge is not generally used. Whereas a few decades and even centuries ago, people where less educated, but were wiser, they could make better use of the knowledge they had, and better use of their mental and physical abilities.</p>
<div className="img"><img src="tech.jpg" alt="" /></div>
                <p>Technology also helps us communicate more efficiently and effectively with others who are spread out over large distances. And it's always developing new ways of doing things that make life easier or bring us closer together whether it's through video chat, social media, or even just taking pictures with your phone and posting them online. But on the other hand, there are some people who think technology should be used less so we can spend more time interacting with each other face-to-face, or "in real life" as they call it. They argue that technology is making us lazier because we don't have to make as much effort to contact people or do things. And they also say that the new way we communicate online can lead to misunderstandings and fights because it is so easy for others to misinterpret the way you mean something.
                 


</p>

            </div>
            
        </div>
        </div>
        </div>
        </motion.div>
    );
}
