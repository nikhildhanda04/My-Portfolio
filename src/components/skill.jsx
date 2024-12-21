const skill = () => {
    return (
        <div className="bg-[#363150] px-[130px] pt-[190px] pb-[50px]">
            <p className="text-[#F7FF8D] font-[velvenda] text-[100px] text-center">
                I like to create things that matter.
                Things that hold value, which are visually appealing and attention-grabbing.
            </p>
            <div className="flex justify-end mt-[-90px]">
                <a
                    href="/src/assets/Resume.pdf"
                    download="NikhilDhanda_Resume.pdf"
                    className="bg-blue-950 rounded-full p-3 text-[white] text-[20px] font-[gothic] hover:text-[yellow]"
                >
                    Click to download resume
                </a>
            </div>
        </div>
    );
};

export default skill;