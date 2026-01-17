"use client";
import { useTranslations } from "next-intl";
import { Controller } from "react-hook-form";
import { Button, Form, cn, Spinner } from "@heroui/react";
import { ProfileFormValues } from "@/entities/user/profile/model/types";
import { PhoneInputField } from "@/shared/ui/phone-input-field";
import { ErrorBlock } from "@/shared/ui/error-block";
import { useProfileForm } from "../../lib/hooks/useProfileForm";
import { ProfileSelectsSection } from "../profile-selects-section";
import { LogoutButton } from "../logout-button";

export const ProfileForm = () => {
  const t = useTranslations();

  const {
    profileQ,
    dicts,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    regionId,
    districtId,
    organizationTypeId,
  } = useProfileForm();

  const isReadonly = true;

  const onSubmit = async (values: ProfileFormValues) => {
    console.log("PROFILE SUBMIT (later)", values);
  };

  return (
    <div className="flex flex-col items-center lg:max-w-118 w-full">
      <h1 className="text-3xl lg:text-4xl font-semibold">
        {t("common.profile")}
      </h1>

      {profileQ.isPending ? (
        <Spinner className="mt-8" />
      ) : profileQ.isError ? (
        <ErrorBlock className="mt-8 lg:mt-10" refetch={profileQ.refetch} />
      ) : (
        <Form
          className="mt-8 lg:mt-10 w-full flex flex-col gap-4 lg:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInputField
                label={t("signUpForm.phoneLabel")}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={!!errors.phone}
                errorMessage={
                  errors.phone?.message ? t(errors.phone.message) : undefined
                }
                placeholder="+996 700 000 000"
                disabled={isReadonly}
              />
            )}
          />

          <ProfileSelectsSection
            dicts={dicts}
            control={control}
            regionId={regionId}
            districtId={districtId}
            organizationTypeId={organizationTypeId}
            isSubmittingAny={isSubmitting}
            isReadonly={isReadonly}
          />

          {/* <Button
            type="submit"
            isDisabled
            className={cn(
              "w-full h-fit rounded-xl font-medium text-sm lg:text-xl py-3 lg:py-4.5",
              "bg-[#EEEEEE] text-[#A9A9A9]"
            )}
          >
            {t("newPasswordForm.save")}
          </Button> */}
        </Form>
      )}

      <div className="w-full flex justify-start">
        <LogoutButton className="mt-10" />
      </div>
    </div>
  );
};
