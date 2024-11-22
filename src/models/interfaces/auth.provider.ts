import { UserProps } from "@/models/user";

export interface IUserRepository {
  findById(id: UserProps["id"]): Promise<UserProps>;

  findAll(): Promise<UserProps[]>;

  save(props: UserProps): Promise<void>;

  changeIdentifier(
    id: UserProps["id"],
    props: Pick<UserProps, "documentType" | "documentNumber">,
  ): Promise<number>;

  changeProps(
    id: UserProps["id"],
    props: Partial<Pick<UserProps, "socialName" | "email" | "phone">>,
  ): Promise<number>;

  changeStatus(
    id: UserProps["id"],
    status: UserProps["isActive"],
  ): Promise<number>;
}
