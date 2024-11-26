import { useEffect, useState } from "react";
import "./App.css";
import KTComponent from "./metronic/core/index.ts";
import { useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";

import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { Mention } from "primereact/mention";
import { SelectButton } from "primereact/selectbutton";
import { SplitButton } from "primereact/splitbutton";
import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace";

function App() {
  const [valueS, setValueS] = useState("");
  const [valueN, setValueN] = useState(1234567890);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const location = useLocation();

  useEffect(() => {
    KTComponent.init();
  }, [location]);

  return (
    <main className="p-4">
      <h1 className="text-2xl first-letter:text-red-400 my-4">Components</h1>

      <Card>
        <FloatLabel>
          <InputText id="inp" className="" name="email" type="text" />
          <label htmlFor="inputtext1">InputText</label>
        </FloatLabel>

        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
        />

        <InputMask
          value={valueS}
          onChange={(e) => setValueS(e.target.value)}
          mask="99-999999"
          placeholder="99-999999"
        />

        <InputNumber value={valueN} onValueChange={(e) => setValueN(e.value)} />
        <InputNumber
          value={valueN}
          onValueChange={(e) => setValueN(e.value)}
          useGrouping={false}
        />
        <InputNumber
          value={valueN}
          onValueChange={(e) => setValueN(e.value)}
          minFractionDigits={2}
          maxFractionDigits={5}
        />
        <InputNumber
          value={valueN}
          onValueChange={(e) => setValueN(e.value)}
          min={0}
          max={100}
        />

        <Mention
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          // suggestions={suggestions}
          // onSearch={onSearch}
          field="nickname"
          placeholder="Enter @ to mention people"
          rows={5}
          cols={40}
          // itemTemplate={itemTemplate}
        />

        <SelectButton
          // value={value}
          // onChange={(e) => setValue(e.value)}
          options={["Off", "On"]}
        />

        <SplitButton
          label="Save"
          icon="pi pi-plus"
          // onClick={save}
          model={[
            {
              label: "Update",
              icon: "pi pi-refresh",
              command: () => {
                alert("Update");
              },
            },
            {
              label: "Delete",
              icon: "pi pi-times",
              command: () => {
                alert("Delete");
              },
            },
          ]}
        />
        <Inplace closable>
          <InplaceDisplay>{"Click to Edit"}</InplaceDisplay>
          <InplaceContent>
            <InputText
              value={valueS}
              onChange={(e) => setValueS(e.target.value)}
              autoFocus
            />
          </InplaceContent>
        </Inplace>
      </Card>
    </main>
  );
}

export default App;
