import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { Form } from "@heroui/react";
import { LocalizedOption, SelectField } from "@/shared/ui/select-field";

type WorkValues = {
  regionId: number | null;
};

const regions: LocalizedOption[] = [
  { id: 1, nameKg: "Чуй областы", nameRu: "Чуйская область" },
  { id: 2, nameKg: "Ош областы", nameRu: "Ошская область" },
  { id: 3, nameKg: "Талас областы", nameRu: "Таласская область" },
];

export const SignUpWorkForm = () => {
  const { control, handleSubmit } = useForm<WorkValues>({
    defaultValues: { regionId: null },
    mode: "onChange",
  });

  const t = useTranslations();

  return (
    <div className="flex flex-col items-center lg:min-w-118">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        {t("signUpWorkForm.title")}
      </h1>

      <p className="text-blue-700 text-base lg:text-xl font-medium mt-2">
        {t("signUpWorkForm.step2")}
      </p>

      <Form className="mt-8 lg:mt-10 w-full flex flex-col gap-4 lg:gap-5">
        <Controller
          name="regionId"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Область"
              placeholder="Выберите область"
              options={regions}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </Form>
    </div>
  );
};
