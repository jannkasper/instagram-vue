<template>
  <FlexWrapper flex-direction="column"
               justify-content="center"
               align-items="center"
  >
    <FlexWrapper align-items="center"
                 justify-content="center"
                 margin="60px 0 0 0"
                 width="62px"
                 height="62px"
                 border="2px solid #262626"
                 border-radius="50%"
    >
      <IconBase view-box="0 0 16 16"><CameraIcon/></IconBase>
    </FlexWrapper>
        <Label size="28px"
               height="32px"
               weight="300"
               :additional-style="{margin: '32px auto'}"
        >
          No Photos
        </Label>
  </FlexWrapper>

</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import IconBase from "@/components/IconBase";
import CameraIcon from "@/components/icons/CameraIcon";
import Label from "@/components/LabelText";
export default {
  components: { CameraIcon, IconBase, FlexWrapper, Label}
}
</script>