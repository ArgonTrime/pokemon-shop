import { useCallback, useState } from "react";

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialValues);
  }, [initialValues]);

  return { form, handleChange, handleReset };
};
export default useForm;
