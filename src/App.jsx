import stars from "../public/assets/images/illustration-five-stars.webp";
import mulitplePlatform from "../public/assets/images/illustration-multiple-platforms.webp";
import consistentSchedule from "../public/assets/images/illustration-consistent-schedule.webp";
import schedulePosts from "../public/assets/images/illustration-schedule-posts.webp";
import growFollowers from "../public/assets/images/illustration-grow-followers.webp";
import audienceGrowth from "../public/assets/images/illustration-audience-growth.webp";
import createPost from "../public/assets/images/illustration-create-post.webp";
import createContent from "../public/assets/images/illustration-ai-content.webp";

function App() {
  return (
    <>
      <main className="p-4 pt-16 mb-4 md:grid max-w-[1200px] gap-6 w-full mx-auto flex flex-col md:grid-cols-[240px_1fr_1fr] lg:grid-cols-[240px_1fr_1fr_240px] lg:grid_rows[1fr_1fr] ">
        <article className="bg-purple_500 rounded-xl p-6 py-8 text-center md:col-start-2 md:col-end-5 md:col-span-2 lg:row-start-1 lg:row-end-2 lg:col-end-4 ">
          <h2 className="text-white_100 text-[2.5rem] mb-5 font-bold">
            Social Media <span className="text-yellow_500">10x</span>{" "}
            <span className="italic">Faster</span> with AI
          </h2>
          <img
            src={stars}
            alt="Over 4,000 5-star reviews from our customers"
            className="w-[140px] mx-auto mb-2"
          />
          <p className="text-yellow_100">Over 4,000 5-star reviews</p>
        </article>
        <article className="bg-white_100 px-4 py-8 rounded-xl md:col-start-2 md:col-end-5 lg:col-span-1 ">
          <img src={mulitplePlatform} alt="" />
          <h2 className="text-black_100 text-xl mt-3">
            Manage multiple accounts and platforms.
          </h2>
        </article>
        <article className="bg-yellow_500 px-4 pt-4 rounded-xl md:col-span-2 md:col-start-4 md:col-end-4 md:w-[260px] lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4 lg:w-full">
          <h2 className="text-black_100 text-2xl mb-4">
            Maintain a consistent posting schedule.
          </h2>
          <img
            src={consistentSchedule}
            alt="Consistent Schedule"
            className="w-[180px]"
          />
        </article>

        <article className="bg-purple_100 p-6 py-8 rounded-xl flex flex-col items-center gap-6 text-center lg:col-start-4 lg:row-start-1 lg:row-end-3 ">
          <h2 className="text-xl mb-5 ">Schedule to social media.</h2>
          <img src={schedulePosts} alt="Schedule to social media" />
          <p className="text-lg">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>
        <article className="bg-purple_500 p-8 pt-8 py-6 rounded-xl text-center flex flex-col items-center col-start-2 col-end-5 justify-center lg:flex-row lg:col-start-3 lg:col-end-5 ">
          <img src={growFollowers} alt="" className="w-[200px]" />
          <h2 className="text-white_100 text-2xl font-bold  mt-8">
            Grow followers with non-stop content.
          </h2>
        </article>
        <article className="bg-white_100 p-6 py-6 rounded-xl w-full col-start-2  row-start-3 row-end-4 md:col-span-2  lg:w-full lg:col-span-1">
          <h2 className="text-5xl ">&gt;56%</h2>
          <p className="text-md my-3">faster audience growth</p>
          <img
            src={audienceGrowth}
            alt="faster audience growth"
            className="w-[180px]"
          />
        </article>
        <div className="md:col-start-1 md:col-end-2 md:row-start-1  row-span-3 flex flex-col justify-between gap-8 h-full w-full" >

        <article className="bg-yellow_100 p-8 rounded-xl w-full flex-1 ">
          <h2 className="text-2xl mb-5 font-bold">
            Create and schedule content{" "}
            <span className="text-purple_500 italic">quicker.</span>
          </h2>
          <img src={createPost} alt="create post" className="w-[160px]" />
        </article>
        <article className="bg-yellow_500 p-6 py-6 rounded-xl flex-1">
          <h2 className="text-3xl mb-5 font-semibold">
            Write your content using AI.
          </h2>
          <img
            src={createContent}
            alt="Write your content using AI."
            className="w-[180px]"
          />
        </article>
        </div>
      </main>
      <footer className="p-4 text-center text-lg">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">SG</a>.
      </footer>
    </>
  );
}

export default App;
