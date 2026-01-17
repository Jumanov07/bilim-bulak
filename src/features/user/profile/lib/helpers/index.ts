import {
  ProfileFormValues,
  ProfileResponse,
} from "@/entities/user/profile/model/types";

export const mapProfileToForm = (p: ProfileResponse): ProfileFormValues => ({
  phone: p.phone,
  regionId: p.region?.id ?? 0,
  districtId: p.district?.id ?? 0,
  organizationTypeId: p.organizationType?.id ?? 0,
  organizationId: p.organization?.id ?? 0,
});
