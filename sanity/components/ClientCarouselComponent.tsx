import React, { useState, useEffect } from "react";
import { TextInput, Button, Box, Stack } from "@sanity/ui";
import { Reference } from "sanity";

type RefListInputProps = {
  type: {
    name: string;
    to: { type: string }[];
  };
  value: Reference[];
  onChange: (value: Reference[]) => void;
};

const CarouselInput: React.FC<RefListInputProps> = (props) => {
  const { type, value, onChange } = props;
  const [refs, setRefs] = useState<Reference[]>(value);

  useEffect(() => {
    setRefs(value);
  }, [value]);

  const handleAddRef = () => {
    const newRef = {
      _type: "reference",
      _ref: "",
      _key: Date.now().toString(),
    };
    setRefs([...refs, newRef]);
  };

  const handleRemoveRef = (index: number) => {
    const newRefs = [...refs];
    newRefs.splice(index, 1);
    setRefs(newRefs);
  };

  const handleChangeRef = (index: number, ref: Reference) => {
    const newRefs = [...refs];
    newRefs[index] = ref;
    setRefs(newRefs);
  };

  useEffect(() => {
    onChange(refs);
  }, [refs]);

  return (
    <Box padding={3}>
      <Stack space={3}>
        {refs.map((ref, index) => (
          <Box key={ref._key}>
            <TextInput
              type="text"
              value={ref._ref}
              onChange={(event) =>
                handleChangeRef(index, { ...ref, _ref: event.target.value })
              }
              placeholder={`Enter a ${type.to[0].type}`}
            />
            <Button tone="critical" onClick={() => handleRemoveRef(index)}>
              Remove
            </Button>
          </Box>
        ))}
        <Button onClick={handleAddRef}>Add {type.to[0].type}</Button>
      </Stack>
    </Box>
  );
};

export default CarouselInput;
