import { Icons } from "../../../../../assets/Icons";

const Video = () => {
    return (
        <>
            <h1
                className='video__heading'
                style={{ transform: "translateX(-20px)" }}>
                Frontendga kirish
            </h1>
            <div className='video'>
                <div className='video__info'>
                    <b className='video__info_title'>Video dars</b>
                    <div className='video__info_icon'>
                        <Icons.bigVideo />
                    </div>
                </div>
                <div className='video__file'>
                    <b className='video__file_title'>O'quv qo'llanmalar</b>
                    <a download={"frontend.pdf"}>
                        <span>
                            File-name.pdf (2mb)
                            <Icons.download />
                        </span>
                    </a>
                    <a href='' download={"file-name.pdf"}>
                        <span>
                            File-name.pdf (2mb)
                            <Icons.download />
                        </span>
                    </a>
                    <a href='' download={"file-name.pdf"}>
                        {" "}
                        <span>
                            File-name.pdf (2mb)
                            <Icons.download />
                        </span>
                    </a>
                </div>
                <div className='video__test'>
                    <p className='video__test_title'>
                        Mavzu uchun testlar soni{" "}
                        <span className='video__test_count'>58</span>
                    </p>
                </div>
                <div className='video__description'>
                    <b className='video__description_title'>Qo’llanma</b>
                    <p className='video__description_text'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Video;
