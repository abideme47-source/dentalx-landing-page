import Image from "next/image"
import { Calendar, User, ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./section-label"

const POSTS = [
  {
    img: "/images/blog-1.png",
    date: "18 October 2024",
    author: "David Malan",
    title: "Why Regular Dental Checkups Are More Important Than You Think",
    excerpt:
      "Regular dental checkups are essential not only maintaining a healthy smile but also for your overall health many people.",
  },
  {
    img: "/images/blog-2.png",
    date: "18 October 2024",
    author: "David Malan",
    title: "You Only Need to See a Dentist When You Have a Problem",
    excerpt:
      "Many people believe that if they don't have any pain or visible issues, there's no need to visit the dentist however, routine.",
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Latest News &amp; Blog</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl">
            What to Expect During Your First Visit to Our Dental Clinic
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-4"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={post.img || "/placeholder.svg"}
                  alt={post.title}
                  width={560}
                  height={320}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 px-2 pt-5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-lime" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-lime" />
                  {post.author}
                </span>
              </div>
              <h3 className="mt-3 px-2 font-display text-xl font-bold leading-snug text-balance">
                {post.title}
              </h3>
              <p className="mt-3 px-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <button
                type="button"
                className="mt-5 inline-flex w-fit items-center gap-1.5 px-2 text-sm font-semibold"
              >
                Read More
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
