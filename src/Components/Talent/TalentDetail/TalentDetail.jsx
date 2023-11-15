import "./TalentDetail.scss";

const TalentDetail = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="talent-image">
            <img
              src="https://static.promediateknologi.id/crop/0x324:2160x1933/750x500/webp/photo/2022/10/12/722414333.jpg"
              alt="talent"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="talent-content bg-warning">
            <h3>Jo Yuri</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              consectetur recusandae autem quibusdam, pariatur nulla nobis esse
              sunt omnis laborum non dolorem voluptates cumque a voluptatem
              quisquam animi, illum exercitationem! Aliquam, harum modi vero
              nemo placeat beatae doloribus cupiditate alias, ad officiis
              dignissimos expedita minima at. Tempora illo eos laborum!
            </p>
            <button className="btn">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentDetail;
