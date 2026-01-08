import { Form, InputGroup, Label, TextField } from "@heroui/react";

export const SignUpForm = () => {
  return (
    <div className="flex flex-col items-center lg:min-w-118">
      <h1 className="text-3xl lg:text-4xl font-semibold">Катталуу</h1>

      <p className="text-blue-700 text-base lg:text-xl font-medium mt-2">
        1-кадам: Жеке маалыматтар
      </p>

      <Form className="mt-8 lg:mt-10 w-full flex flex-col gap-4 md:gap-5">
        <TextField name="name">
          <Label className="w-fit text-sm lg:text-base text-neutral-500 font-medium ml-2">
            Аты-жөнүңүз
          </Label>

          <InputGroup.Input
            className="placeholder:text-[#A9A9A9] focus:border-blue-700 py-3.5 px-4 font-medium text-sm lg:text-xl bg-[#F5F5F5] rounded-lg"
            placeholder="Асанов Үсөн Эсенович"
          />
        </TextField>

        <TextField name="phone">
          <Label className="w-fit text-sm lg:text-base text-neutral-500 font-medium ml-2">
            Телефон номериңиз
          </Label>

          <InputGroup.Input
            className="placeholder:text-[#A9A9A9] focus:border-blue-700 py-3.5 px-4 font-medium text-sm lg:text-xl bg-[#F5F5F5] rounded-lg"
            placeholder="+996 700 707 700"
          />
        </TextField>
      </Form>
    </div>
  );
};
