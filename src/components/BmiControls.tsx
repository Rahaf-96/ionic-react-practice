import { FC } from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { refreshOutline, calculatorOutline } from "ionicons/icons";

const BmiControls: FC<{ calculateBIM: () => void; reset: () => void }> = ({
  calculateBIM,
  reset,
}) => (
  <IonRow>
    <IonCol className="ion-text-left">
      <IonButton onClick={calculateBIM}>
        <IonIcon slot="start" icon={calculatorOutline} />
        Calculate
      </IonButton>
    </IonCol>
    <IonCol className="ion-text-right">
      <IonButton onClick={reset}>
        <IonIcon slot="start" icon={refreshOutline} />
        Reset
      </IonButton>
    </IonCol>
  </IonRow>
);

export default BmiControls;
