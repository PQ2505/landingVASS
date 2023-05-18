export function Form() {
  return (
    <div className="container containeForm">
      <form className="bg-black p-3 text-bg-dark row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-placeholder bg-black text-light"
              placeholder="Nombre y Apellidos"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control custom-placeholder bg-black text-light"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-placeholder bg-black text-light"
              placeholder="Empresa / Organismo"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-placeholder bg-black text-light"
              placeholder="Pais"
            />
          </div>
        </div>
        <div className="col-12 col-sm-12 offset-lg-1 col-lg-5">
          <div className="mb-3">
            <input
              type="tel"
              className="form-control custom-placeholder bg-black text-light"
              placeholder="Teléfono"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje:</label>
            <textarea
              className="form-control bg-black text-light"
              required
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="col-12 col-sm-12 offset-lg-7 col-lg-5 justify-content-end">
          <div className="d-flex justify-content-end">
            <button className="buttonForm" type="submit">
              ENVIAR{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
