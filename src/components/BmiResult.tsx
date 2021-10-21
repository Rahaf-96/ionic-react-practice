import { FC } from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BmiControls: FC<{ result: number }> = ({ result }) => (
  <IonRow>
    <IonCol>
      <IonCard>
        <IonCardContent>
          <h2 className="ion-text-center">your body mass index</h2>

          <h3 className="ion-text-center">{result.toFixed(2)}</h3>
        </IonCardContent>
      </IonCard>
    </IonCol>
  </IonRow>
);

export default BmiControls;
