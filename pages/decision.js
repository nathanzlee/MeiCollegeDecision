import { useState, useEffect } from 'react'

export default function Decision() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {setLoading(false)}, 5000)
    }, [])

    const deadline = new Date(2023, 3, 7, 19, 0, 0, 0)
    const now = new Date()

    // if (now < deadline) {
    //     return null 
    // }

    return loading ? 
    (
        <div className="-10 h-[100vh] w-[100vw] bg-gray-300 flex flex-col justify-center items-center">
            <h1 className="text-gray-500 text-3xl">Loading...</h1>
        </div>
    ) : 
    (
      <div className="p-10 h-[100vh] w-[100vw] bg-gray-300">
        <div>
          <p className="mb-8">April 7, 2023</p>
          <p className="mb-4">Dear Mama, Baba, and Bebe,</p>
          <p>After much research and deliberation, the university I have chosen to commit to is the <strong>University of California Berkeley</strong>. The choice was not easy, but I do believe that if the multiverse did exist, the many other versions of me would have chosen the same because of these 8 reasons:</p>
          <ul class="list-decimal ml-10 mb-3">
            <li>For one, I would have much more freedom with my art in Berkeley because I would major in two separate and independent fields: art and cognitive science, whereas in Carnegie Mellon, my art exploration would be restricted to my science, and my science, to my art - given that the BSA program is an integrated major.</li>
            <li>Secondly, as a cognitive science major, internships and other opportunities are much easier to seek out. Berkeley also has a top notch cognitive science program, which may be more useful for me in the future.</li>
            <li>Next, attending Berkeley means getting to stay close to home with my family. Momo Nee can cheer. And I, too, can cheer for Mama's yummy homemade food, Baba's constant nagging, and Bebe's obnoxious noise-making.</li>
            <li>A somewhat (suprisingly) desirable point I considered in Carnegie Mellon was the fact that I could experience independence, and learn to handle being on my own. However, since I can do Cal's study abroad programs, I realized that this won't be a major issue for me.</li>
            <li>This one's an obvious one: the tuition at Cal is far less at $14k as compared with CMU's $59k.</li>
            <li>I've come to realize that if I find a soulmate at Cal, they will most likely be in-state, whereas if I meet someone at CMU, they could be from anywhere (like Alaska, which is not ideal).</li>
            <li>As a public school, Berkeley has far more students than Carnegie Mellon, which means more freedom to do my own thing (especially in art, where a small class size means more attention on each individual, requiring me to constantly stay on my toes). I prefer a learning environment with more students because it is less draining.</li>
            <li>This last reason is a stupid one, but I don't want to go back to Carnegie Mellon without the friends I met at CMU's 6 week program. My heart would feel off to step back to such a familiar place without those precious people.</li>
          </ul>
          <p className="mb-8">Thank you for trusting me with my decision. I look forward to the endless days of grabbing boba with you all every single weekend.</p>
          <p>Sincerely,</p>
          <p>Kari Lee</p>
        </div>
      </div>
      
    )
  }