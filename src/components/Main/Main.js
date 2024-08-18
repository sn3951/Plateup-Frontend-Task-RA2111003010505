import Bar from "../Bar/Bar";
import React, { useState, useEffect } from 'react';
import "./Main.css";

function Main() {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const images1 = [
    "https://s3-alpha-sig.figma.com/img/f5bd/0693/3fdcb15cf7ef8c61e38ef5132a1f775a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CfrEqKHeJa2FI6Gem~qDzEPJ2Pi~Wsx3sfqPwPgkK1f3A1T4EKUpe77ocjawQahb7-AIg7HIRQXNSzMTTV-XjwovnttHxRL2cyOOOnFE5YkipjLFlYZnDgnfKqLDAR~ku71bcx4EJJDGgOkeMrMHJxe827N3zUeoOGtezkKt7Ial7u1wEf3tSaEoQXbbRy~DvZ7YyDQNbU8yX2~GZ8r9genb6qXJUeevuCRZnwGwCm~TQ0MQLCvk-E-O2v69yYWbXd53qrAGfffxn38RLFaCQGeogOkfgzqPRH6lj2pIrwW5I-bve2356Xe7vgSjk7PvuDHeOAK65PxarX7WSu3-wQ__",
    "https://s3-alpha-sig.figma.com/img/6cc3/409b/10e4888e024bd27d8c201472c748b661?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQ7W4pWjEH9bvqBdRAyKHytxtorEM6~Jn-HNYkLzM8RNxr8OJV1NsQGC4Rip6Djsf6xcPSd3h7cfCPNBcspbYNqIV9S-nhCwJ4qk2XuMKW7-0-kXykr7vVk2hlgI73p0Zw5ZiNsMV-3ZYPa6Q6V2Vv7ng0GvPd5K5EjM2rcbojBjPGeB3JvyF0qi8jBJLFJEQq~e-wk5iDmJm7qg5OzUY5XtZ2ZoUnBX1NYfhyQKdQByLWlNDvCxsjAYcu9kwj5IdUzuvWMX4AdiH3SIXTdXBx4mVbK-MLjiBQRVPqrVk5Y4gehuBEYnxZEyTEsNqknxBDIHs9RzpNEVqoHjKCHu5A__",
    "https://s3-alpha-sig.figma.com/img/74fb/c824/119abeac21ffdc8a4dd8db7af9dcbbec?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKBwkN~ilLvFFl~VTon6sf-2GTGe7fQ8xL72RkkRAs0~baRW8mZdLpU6NdsAIW-7kOEhidM9v2UoB-xwHIkjeTLUe1qqEdVKq-uDZvC0PqDyYKNDTP8VhFxI1s9glZVp~iyYFyP-Zo9o3ch2yPFXMkaBdsydLdKVSoKTYrJqUvNlx9mVVWQ72dB~yPEHNnNH7OVvqbNIeS97SBmR8a2BmLnHzJVsaVoZGwAlUzhIbwCRH3XTc0n7cjfbohTqakOLVcaMlKWtfhvHVij~R5~o2h8qCySXFRqjBdiP1xSLlU~TBpoEkuScprBEIRagI9J3ZFev1GgdWSz9mVipBrWtPA__",
    "https://s3-alpha-sig.figma.com/img/6de6/901c/25cc4c5f8f25bd6cd55f7293ab742352?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZuqCgx9DDjUtvJh4N8hgM7spFx6d5LysVKCya4Bl41GOyvMaQJmYhZB66DqAaqu7t71KcMC33AX-ySQ5HJKbaSeKOWzt95EV4DMhugCfwVQbkkwzMxnMBIKTLJhCrqDauerp41iPG8mtmyFxG1aVxebAgmh~~YVtxo13Yku2YtUL7fQf0AFbM23MEhyICjeJozEnd7eU~9hbwAXWqS0uyzAWBCHIm80FoL6Rnb1jpgkQFzpFKHj7tlaif8rdbjQWMmqm4K-wy8YL40ruhl~R0hC8ejIMW6dYeoNZHUVQsUtx-zNJXmly8XHMd4-HMcOqPcBU3b3JolXkfM8axCW3Uw__"
  ];

  const images2 = [
    "https://s3-alpha-sig.figma.com/img/349d/5ed2/1042ef817dada458b98e8b867cbf799a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gOsw2NzUpkUmyAWrqrdxAC6fQKVhQALC-~B9k7snNrgiD9zDhpKcrrsY1CZcpS6kvo6ZqSwlAMO3BQ-nMQunKYL4fn-SNEhRDDnS92KT-S1~boUGFPYzU7LVEcFLnJ-A8xGenkPgtHBeuT57hvLO7x8NoaI~kBm3VG0T5XWFLNBvl0n21Sad2rvDrPT9ZdZmoJpWfC0k-J0pm4hSlz3AjgRykxJLi0TK9s279F-8kYPFce17ls5dB2ZfegpgjAm74lSEpklIDihzAhCQnBCnRFbXJ46H65cflq7VdaGaaH9ALzn~QmNLt-IdDEGtjpC2ZIziNORU0qakwXs16S8GbA__",
    "https://s3-alpha-sig.figma.com/img/97b1/f57c/636086f72877d55138382df7061f98f7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7UyDSkepgPRMG-K7dz06POfireGSGyzyXu8JHXHpUWhSkhoRsL-hjPYpW-99q-OVaJAivd3qiu34ZUZKMOK8AVgmkViRf7BwR0xioElTU9-QAyCNupSpkGJtauJfdKcz4-LbSb7DDiB2D4kRii-MfyLs2sVw6YjfCWwVLQLpOe2-UuE4zMxMKMGs8H7iM1~XEEDHVkA7ugoIIXXEqStpI6qmQF9UwsNxgil5ygqdNJJeHHEWM852PCrW~F6YIUrIYnvtmVl1qapL5wzt8qt7xh6NTyIselJQHiF6H9OkiK-xrCpUIlwq6BOP7ljsRvYIo-rWqe3zVrAvSkSCpJxNw__",
    "https://s3-alpha-sig.figma.com/img/96d5/fcfb/274f7b96a36babcad8a31f5ceb915cd0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L02C2kqUDtfnm3SJ8rDYyvY1MeJFh3Fr-xr9rzZq1VCNEizim6N3a-bNSugmzBwWXYSiBhmua4XUiABAefcuFJMAFq4WHN8ewSL02Qk3MXCdUBEnpYct-gbAkkei~VFFj46Z9xhb7wSQv1zH2jwP6CuU6Xad1uX1jguJeH4-EX7Oh7tkMpVtaFVj5lpoq4YABEy2olYazhABVWd3uwo3JdlVrhjGzTzm93EVCyMowweH4BEH3OHHc3s5l-qdxKEYFiv6X3~p3Ezs5Tz2nOrttCFIPMb6lmPeuYAv6dBkdPQLKwQHp-~VhSDCF3UZ3l-Qf2aryrc0xmafZNgJbVD6hg__",
    "https://s3-alpha-sig.figma.com/img/5b78/4593/2f7fe68192a5ef466fc48247626b4177?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BB0vFR96OWludyDv7Vo20pPFnYaycfRalaTaYkOI8anCjG-DuXI63qoIR2EooRF3neWhy7SVkOi1m9Tr3G8qT6-tAcWPXmjALs2jfNhMWIKfWVTVS-43emDVjAquJDbQvDNHB4RRodeOjkoz4fzIJM6Hq3kUlB6D~ATn0nol1h-nbjCVa0LvwR~6LoT728wPQRnZHDUgP3OItLCChiuVkGLeoIMNt~Uw96RnhDqDx2LinZ6lFmWmm7COJ9YCL-jTjEG7aahcCsCRmi0vp~Z~HzJQUvXJfHev4M9A51LMNDNLAXdiqHQXo4lWw8TVyp-Dz8N3VHolJlnOEEZvNMyp1Q__"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="card-section">
          <div className="image-columns">
            <div className="image-column column-1">
              <div className="scroll-content">
                {[...images1, ...images1].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="card-image"
                  />
                ))}
              </div>
            </div>
            <div className="image-column column-2">
              <div className="scroll-content">
                {[...images2, ...images2].map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Image ${index + 5}`}
                    className="card-image"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-section">
            <p className="heading">
              <span className="heading-part">Book an appointment with</span>
              <span className="heading-part"> {" "}<br /> </span>
              <span className="highlight">lifestyle medicine</span>
              <span className="heading-title"> experts</span>
            </p>
            <p className="description">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
        </div>
        <Bar />
      </div>
    </div>
  );
}

export default Main;
