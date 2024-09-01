import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove—scrollbar container my—auto pt-[60px] pl-28 ">
        <div className="sub—container max—w—[496px]">
          <Image
            width={1000}
            height={1000}
            src={'/assets/icons/logo-full.svg'}
            alt="care pulse"
            className="mb-12 w-fit"
          />
        </div>
      </section>
      <section>
        <Image
          src={'/assets/images/onboarding-img.png'}
          width={1000}
          height={1000}
          alt="onboarding"
          className="w-full h-full rounded-l-[30px]"
        />
      </section>
    </div>
  )
}
