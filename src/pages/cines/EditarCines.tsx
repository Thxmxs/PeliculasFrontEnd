import { useFormik } from "formik";
import * as Yup from "yup";
import { ICreacionCine } from "../../interface/ICines";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Mapa } from "../../components/shared/Mapa";
import { useGetCineById } from "../../hooks/useGetCineById";
import { Cargando } from "../../components/shared/Cargando";
import { editCineById } from "../../services/cines";
import { useState } from "react";

export const EditarCines = () => {
  const [errores, setErrores] = useState<string[]>([]);

  const { id }: any = useParams();
  const { cine, loading } = useGetCineById(parseInt(id));
  const navigate = useNavigate();

  const formik = useFormik<ICreacionCine>({
    initialValues: {
      nombre: cine?.nombre ?? "",
      latitud: cine?.latitud ?? 0,
      longitud: cine?.longitud ?? 0,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El Nombre es obligatorio")
        .primeraLetraMayuscula(),
    }),

    async onSubmit(values) {
      console.log(values);
      await editCineById({ ...values }, id)
        .then(() => navigate("/cines"))
        .catch((err) => setErrores(err.response.data));
    },
  });

  if (loading) {
    return <Cargando />;
  }
  return (
    <div>
      <h3>Editar cine</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          {errores && (
            <ul>
              {errores.map((el) => {
                return <li key={el}>{el}</li>;
              })}
            </ul>
          )}
          <div className="form-group">
            <label
              style={{
                color:
                  formik.errors.nombre && formik.touched.nombre
                    ? "red"
                    : "black",
              }}
              htmlFor="nombre"
            >
              {formik.errors.nombre && formik.touched.nombre
                ? formik.errors.nombre
                : "Nombre"}
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={formik.values.nombre}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Mapa
              formikEvent={formik}
              latitud={cine?.latitud}
              longitud={cine?.longitud}
            />
          </div>
          <button
            className="btn btn-primary"
            disabled={formik.isSubmitting}
            type="submit"
          >
            Ingresar
          </button>
          <Link to={"/cines"} className="btn btn-secondary">
            Cancelar
          </Link>
        </form>
      </div>
    </div>
  );
};
