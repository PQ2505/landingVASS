export function Form() {
  return (
    <form class="bg-black p-3 text-bg-dark row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="mb-3">
          <input
            type="text"
            class="form-control custom-placeholder bg-black text-light"
            placeholder="Nombre y Apellidos"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control custom-placeholder bg-black text-light"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control custom-placeholder bg-black text-light"
            placeholder="Empresa / Organismo"
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control custom-placeholder bg-black text-light"
            placeholder="Pais"
          />
        </div>
      </div>
      <div class="col-12 col-sm-12 offset-lg-1 col-lg-5">
        <div class="mb-3">
          <input
            type="tel"
            class="form-control custom-placeholder bg-black text-light"
            placeholder="Teléfono"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Mensaje:</label>
          <textarea
            class="form-control bg-black text-light"
            required
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="col-12 col-sm-12 offset-lg-7 col-lg-5 justify-content-end">
        <div class="d-flex justify-content-end">
          <button class="btn btn-primary bg-black" type="submit">
            ENVIAR{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
