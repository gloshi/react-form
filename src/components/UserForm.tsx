
import { FormWrapper } from "./FormWrapper";

type UserData = {
  nickName: string;
  name: string;
  surname: string;
  sex: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  nickName,
  name,
  surname,
  sex,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>Nickame</label>
      <input
        autoFocus
        required
        maxLength={30}
        type="text"
        value={nickName}
        onChange={(e) => updateFields({ nickName: e.target.value })}
      />
      <label>Name</label>
      <input
        required
        type="text"
        value={name}
        maxLength={50}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label>Surname</label>
      <input
        required
        min={1}
        type="number"
        value={surname}
        maxLength={50}
        onChange={(e) => updateFields({ surname: e.target.value })}
      />
      <label>sex</label>
      <select
        required
        value={sex}

        onChange={(e) => updateFields({ sex: e.target.value })}
      >
        <option value='man'>man</option>
        <option value='woman'>woman</option>
      </select>
    </FormWrapper>
  );
}
