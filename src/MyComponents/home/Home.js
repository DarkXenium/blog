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
                <div className="contents">
                    <div className="left"><div className="img"><img id="b1" src="mygif.gif" alt="" /></div></div>
                    <div className="right">For the circle pulsing animation, you'll notice that there is a continuity where as one circle effortlessly fades away another circle prominently arrives to take its place......</div>
                    <span>Written on - 29 June 2021</span>
                </div>

            <div class="wrap-collabsible">
            <input id="collapsible" className="toggle" type="checkbox" ></input>
            <label for="collapsible" class="lbl-toggle">BLOG #1 - (PULSE) Growing Circle Animation using CSS <small>(1 min. read)</small></label>
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
            <div className="contents">
                    <div className="left"><div className="img" ><img id="b2" src="giphy.gif" alt="" /></div></div>
                    <div className="right">The main goal of technology, which brings together tools to promote development, use, and information exchange, is to make tasks easier and to solve many of humanity's problems.......</div>
                    <span>Written on - 7 July 2021</span>
                </div>

            <div class="wrap-collabsible">
            <input id="collapsible2" className="toggle" type="checkbox"></input>
            <label for="collapsible2" class="lbl-toggle">BLOG #2 - EVOLVING TECHNOLOGY AND IT'S IMPORTANCE  <small>(2 min. read)</small></label>
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
            <div className="b1">
                <div className="contents">
                    <div className="left"><div className="img"><img id="b" src="sites.jpg" alt="" /></div></div>
                    <div className="right">A great way to improve your skills when learning to code is by solving coding challenges,but there are many platforms and hard to choose where to invest time.......</div>
                    <span>Written on - 12 July 2021</span>
                </div>

            <div class="wrap-collabsible">
            <input id="collapsible4" className="toggle" type="checkbox" ></input>
            <label for="collapsible4" class="lbl-toggle">BLOG #3 - Best Coding platforms to learn and practice Code! <small>(1 min. read)</small></label>
            <div class="collapsible-content">
    <div class="content-inner">
<p>A great way to improve your skills when learning to code is by solving coding challenges,but there are many platforms and thus it becomes hard to choose where to invest time and but worry not here I am to help you with choosing the platform which is right for you. When I started out I was really confused but as time flew *sad noises*, as you know coding takes a huge chuck of time in your day and I discovered many great platforms. I'll list my top favourite ones down below :-</p>                

                <h2>1. HackerRank</h2>
<div className="img"><img src="https://cdn-images-1.medium.com/max/2600/1*UGT1Rh9xLww3JeIDR1F0RQ.png" alt="" /></div>
                
                <p>It is a great platform where you can choose the language you want to improve upon. The Difficulty curve is greatly maintained. Also as you progress you get badges in the form of stars from 1 star covered in bronze to shining gold when you reach 5 star, which really motivates to grow and get better.</p>
                <h2>2. CodeChef</h2>
<div className="img"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png" alt="" /></div>
                <p>Well once you complete your basics you can work your way upto Competetive Programming(CP) and here at codechef you get Long challenges which is really unique compared to other CP websites which is really beneficial to a beginner who can get to know about the question while practicing and learning.</p>
                
                <h2>3. CodeForces</h2>
<div className="img"><img src="https://codeforces.org/s/87383/images/codeforces-telegram-square.png" alt="" /></div>
                <p>You can further improve upon CP on codeforces as the questions here are really tough and you need to apply the various DS and Algorithms to solve these questions.You can go from a Noobie to a full fledged grandmaster with many good prizes if you manage to be in the top 10.</p>
                <h2>My Conclusion</h2>
                <p>I've also heard that the platform LeetCode is really great even though I haven't used in personally, None the less all the best to the future Coders out their, I hope these platforms help you unlock your potential and reach great heights.</p>
                
    </div>
  </div>
            </div>
            </div>
            <div className="b1">
                <div className="contents">
                    <div className="left"><div className="img"><img id="b1" src="https://user-images.githubusercontent.com/34159717/64080396-5d011180-cd11-11e9-8320-99a5619af9ce.png" alt="" /></div></div>
                    <div className="right">AWS Deepracer is a fun way to learn and implement Machine learning with hands on experience.......</div>
                    <span>Written on - 27 July 2021</span>
                </div>

            <div class="wrap-collabsible">
            <input id="collapsible5" className="toggle" type="checkbox" ></input>
            <label for="collapsible5" class="lbl-toggle">BLOG #4 - Reinforcement Learning with AWS DeepRacer <small>(2 min. read)</small></label>
            <div class="collapsible-content">
    <div class="content-inner">
    <h2>WHAT WE ARE WORKING TOWARDS</h2>
    <p>AWS Deepracer is a fun way to learn and implement Machine learning with hands on experience. Developers of all skill levels can get hands on with machine learning through a cloud based 3D racing simulator, which they can start using simply by logging into their aws account. AWS DeepRacer is based on the model of reinforcement learning (RL). RL is an advanced machine learning (ML) technique that takes a very different approach to training models than other machine learning methods.</p>
                <h2>WHAT AWS DEEPRACER SERVICES PROVIDE</h2>
                <p>The user can now use the AWS DeepRacer 3D racing simulator.  Experiment with multiple sensor inputs, the latest reinforcement learning algorithms, neural network configurations and simulation to-real domain transfer methods.
</p>
<div className="img"><img src="aws.png" alt="" /></div>
                <h2>HOW TO BEGIN</h2>
<p>You will first need to create your own deepracer car by selecting the type of car, the skin you want on it, the track you want it to run on. And finally, you can train your model by setting the time you want it to train for and then testing it! As you progress you can participate in the AWS League.It is a global autonomous racing league, driven by machine learning.There are 3 stages that you can advance to :-</p>
<h2>1. Start in the Open Division and win virtual cars</h2>
<h2>2. Advance to the Pro Division and win gear</h2>
<h2>3. Take on the League's best and win a DeepRacer</h2>
                
                <p>It is a fun community of many Machine learning Enthusiast and you can meet many new people thorugh the various community driven events.</p>
                <h2>CONCLUSION</h2>
                <p>Here are some of the official AWS links from their website containing various resources from where you can learn to build your own models and tracks. You can also improve your racing performance.</p>
              
            <a className="hello" href="https://youtu.be/9hzPYLxd6Mw">https://youtu.be/9hzPYLxd6Mw</a>
            <a className="hello" href="https://youtu.be/xBpglYdmdyw">https://youtu.be/xBpglYdmdyw</a>
            <a className="hello" href="https://youtu.be/a6q-safxklY">https://youtu.be/a6q-safxklY</a>
            <a className="hello" href="https://youtu.be/YSSdFnBZ5gc">https://youtu.be/YSSdFnBZ5gc</a>
            <p>That's it, time to get your hands dirty! All the best.</p>
                
    </div>
  </div>
            </div>
            </div>
        </motion.div>
    );
}
