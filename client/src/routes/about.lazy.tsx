import { createLazyFileRoute, Link } from "@tanstack/react-router";

import Image from "../components/image/Image";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <header>
        <Image
          name="lateArt.webp"
          alt="Late Art"
          height={window.innerHeight / 1.5}
          width={window.innerWidth}
        />
        <div className="banner-text">
          <h1 className="shadow roboto banner-header">ABOUT US</h1>
          <p className="shadow lato banner-sub-header">
            Our Story
          </p>
        </div>
      </header>
      <main>
        <p className="general-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit beatae eius nulla amet laudantium nesciunt ipsum ducimus adipisci sed nobis nostrum impedit natus corrupti iste temporibus, sequi, ullam incidunt? In!
        Nisi, adipisci. Nam ut recusandae veritatis animi illo mollitia autem ipsum odit fugit consectetur corporis quibusdam repellendus laboriosam sunt eligendi perspiciatis, qui tempora asperiores aliquid! Error ut aperiam ullam voluptatibus.
        Fugit velit voluptas fuga excepturi, non assumenda molestiae ipsum quos laboriosam inventore neque! Sit sunt et dicta sequi dolore repellendus quaerat odio quae, odit ea aut voluptas voluptatum blanditiis nemo!
        Deserunt iusto culpa dicta odio voluptatibus! Perspiciatis maxime error maiores, nemo excepturi ex provident ad. Consectetur a impedit sunt molestiae quisquam ipsum est facilis dolores voluptatibus maiores. Animi, suscipit non.
        Quas ut neque soluta beatae, deserunt, quaerat qui quasi placeat ducimus cumque et odit quae omnis aliquid repudiandae illo repellat dolore quis magni voluptatum aliquam labore at. Eaque, ipsum a.
        Iure quisquam sint qui reprehenderit cumque commodi earum inventore, eligendi optio libero amet aliquam iusto nulla temporibus unde deserunt dolores omnis dicta ipsa aut ipsam voluptatem! Voluptates blanditiis nihil at.
        Itaque id quo atque eaque, nisi adipisci quam, quos omnis, amet doloremque dolore alias ullam mollitia commodi necessitatibus nam fugiat blanditiis voluptate fuga? Ducimus animi inventore maxime itaque sunt accusamus?
        In sunt eaque consectetur ut libero iure corrupti maxime, fuga beatae adipisci eos incidunt aliquid ipsum. Provident voluptates doloremque non necessitatibus vitae sint repudiandae quas laboriosam, assumenda fugit minima accusamus?
        Delectus officia dolore vero id omnis. Perferendis sint quaerat iusto rerum quos expedita, soluta quidem ab dolore totam minima vero eum porro at laborum, nesciunt dolores quae libero quisquam officia.
        Minus consectetur dolorum, velit optio alias non possimus. Quisquam, incidunt necessitatibus esse nihil vitae voluptatum quasi, molestiae eum labore, magnam aut error. Ipsam dolor possimus dolore quo. Ex, cupiditate quas?
        Esse doloribus iste cumque. Excepturi iure tenetur ratione impedit beatae deleniti corrupti optio distinctio culpa aut eligendi suscipit dolores, totam animi facere neque assumenda. Magnam ad delectus necessitatibus quia nam?
        Incidunt temporibus facilis vitae facere ullam nulla, autem ut repellat ipsum, harum dolorem minus! Ea soluta a veniam. Mollitia vero amet laudantium enim iste, qui sint debitis sed exercitationem sit.
        Iste modi quas adipisci aspernatur placeat molestias ducimus commodi! Delectus, neque voluptatibus pariatur quos quod amet iste, assumenda vero distinctio sed magni fuga totam molestias sit earum impedit hic eius!
        Nulla alias facilis distinctio incidunt deleniti minima laboriosam quasi harum. Quibusdam, officiis reprehenderit. Commodi at ea eum consequuntur similique quas, ratione perspiciatis corporis fugiat cum, maxime mollitia perferendis beatae ipsa?
        Aliquam, repellendus. Velit, amet aperiam earum itaque labore, cupiditate, animi similique ut assumenda distinctio quas quam alias. Repudiandae incidunt quae quibusdam officia animi cum exercitationem maiores accusamus asperiores, omnis iste.
        Dolorum est ipsam porro quas ullam eveniet voluptatibus ipsa perspiciatis illo maiores ducimus enim veniam atque officiis pariatur, iusto corrupti odit deserunt doloremque sapiente! Beatae inventore excepturi voluptates obcaecati cum?
        Omnis explicabo necessitatibus dolores veniam porro doloremque molestiae esse voluptatem ad ex. Obcaecati modi corporis dolor nesciunt odio excepturi natus hic! Tempore itaque, enim sequi quia nisi repudiandae numquam quam.
        Quidem odio hic nostrum alias sapiente nobis amet voluptates cum sunt eius, vero eligendi ut blanditiis placeat commodi temporibus nam? Nihil earum obcaecati sit aspernatur quos aperiam non nemo consequatur.
        Sit optio ratione vel nesciunt tenetur amet veniam perspiciatis voluptatem quam cupiditate iste laboriosam delectus doloribus ipsam commodi velit qui excepturi autem corrupti voluptate, eveniet tempore provident quos aliquam! Cum.
        Cumque consequatur necessitatibus beatae tenetur omnis odio error ut, facere animi perferendis officia, voluptas praesentium reiciendis amet maxime hic quas! Odit provident dolorem sapiente voluptatibus at illo, incidunt rem sed.
        Laborum dolor, ab nostrum est reiciendis iste esse nisi eum laudantium, ullam, magnam odio tenetur hic dignissimos rem quos blanditiis voluptatibus! Neque temporibus illo culpa voluptatibus modi rerum numquam sint!
        Hic maxime fugit nostrum repellat voluptate possimus officia accusantium, animi vitae porro mollitia doloribus eius culpa nihil consectetur, adipisci eos obcaecati ratione voluptatem nulla earum amet beatae in! Vel, cupiditate?
        Sit, eveniet a. Dolorum, nostrum quas. Temporibus voluptatibus ratione culpa rem saepe? Dolores ratione mollitia quos cupiditate provident harum maxime eos nisi eligendi! Dicta voluptatibus minima itaque quos? Modi, dolorem?
        Atque, numquam error architecto blanditiis ea provident itaque accusantium nesciunt rem explicabo debitis nihil corporis placeat illum vitae quia tenetur sint officiis quod natus eligendi dolores unde. Quibusdam, nemo ipsum.
        Aspernatur hic voluptatem eum quasi culpa facere? Nobis odio ipsam facere veritatis deleniti possimus corrupti, tenetur aperiam labore. Illo at delectus natus quas suscipit similique ipsa sit excepturi beatae! Quia!</p>
      </main>
    </>
  );
}
