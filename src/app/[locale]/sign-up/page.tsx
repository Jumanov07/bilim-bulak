import { SignUpForm } from "@/features/sign-up/ui/sign-up-form";
import { BackButton } from "@/shared/ui/back-button";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="max-w-400 m-auto p-4 lg:p-5">
      <BackButton />

      <div className="mt-8 lg:mt-11.5 lg:flex items-start justify-between gap-10 lg:px-20">
        <SignUpForm />

        <div className="flex-col items-center hidden lg:flex">
          <Image
            src="/images/sign-up.webp"
            alt="Sign Up"
            width={472}
            height={472}
          />

          <h2 className="text-3xl font-semibold mt-10 text-center">
            Билим Булакка кош келиңиз!
          </h2>

          <p className="font-medium text-neutral-500 mt-4 text-center text-balance max-w-181">
            Урматтуу педагог, бул платформа сиздин психологиялык
            саламаттыгыңызды колдоо максатында түзүлгөн. Сиздин жеке
            маалыматтарыңыз жана тесттин жыйынтыктары купуя бойдон калат.
            Сураныч, өзүңүздүн телефон номериңизди так жазыңыз.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
