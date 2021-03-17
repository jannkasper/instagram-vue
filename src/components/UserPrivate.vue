<template>
  <FlexWrapper justify-content="center"
               padding="40px"
               border="1px solid #efefef"
               border-radius="3px"
               background="#fff"
               :other="{ borderTop: '1px solid #dbdbdb', textAlign: 'center' }">
    <Wrapper max-width="230px">
      <Wrapper margin="0 0 13px 0">
        <Label size="14px" color="#262626">
          This Account is Private
        </Label>
      </Wrapper>
      <Info size="14px" color="#262626">Follow to see their photos and videos.</Info>
    </Wrapper>

  </FlexWrapper>
</template>
<script>
import FlexWrapper from "@/components/FlexWrapper";
import Wrapper from "@/components/Wrapper";
import Label from "@/components/LabelText";
import Info from "@/components/InfoText";
export default {
  components: {Info, Label, Wrapper, FlexWrapper}
}
</script>