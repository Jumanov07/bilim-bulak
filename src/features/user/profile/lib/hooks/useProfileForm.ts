"use client";
import { useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetProfile } from "@/entities/user/profile/model/api/queries";
import { useDictionaries } from "@/entities/auth/dictionaries/model/hooks/useDictionaries";
import { ProfileSchema } from "@/entities/user/profile/model/schemas";
import { ProfileFormValues } from "@/entities/user/profile/model/types";
import { mapProfileToForm } from "../helpers";

export const useProfileForm = () => {
  const profileQ = useGetProfile();

  const defaultValues = useMemo<ProfileFormValues>(
    () => ({
      phone: "996",
      regionId: 0,
      districtId: 0,
      organizationTypeId: 0,
      organizationId: 0,
    }),
    []
  );

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues,
    mode: "onChange",
  });

  const { control, reset, formState } = form;

  const regionId = useWatch({ control, name: "regionId" });
  const districtId = useWatch({ control, name: "districtId" });
  const organizationTypeId = useWatch({ control, name: "organizationTypeId" });

  const dicts = useDictionaries({ regionId, districtId, organizationTypeId });

  useEffect(() => {
    if (!profileQ.data) return;

    reset(mapProfileToForm(profileQ.data), {
      keepDirtyValues: true,
      keepErrors: true,
    });
  }, [profileQ.data, reset]);

  return {
    profileQ,
    dicts,

    regionId,
    districtId,
    organizationTypeId,

    ...form,
    isSubmitting: formState.isSubmitting,
    isValid: formState.isValid,
    isDirty: formState.isDirty,
  };
};
