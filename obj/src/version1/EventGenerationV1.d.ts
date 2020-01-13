import { EventGenerationZoneV1 } from './EventGenerationZoneV1';
import { EventGenerationDataValueV1 } from './EventGenerationDataValueV1';
export declare class EventGenerationV1 {
    org_id: string;
    organization?: any;
    object_id: string;
    object?: any;
    assign_id?: string;
    assign?: any;
    device_id?: string;
    group_ids?: string[];
    rule_id: string;
    rule_type: string;
    rule?: any;
    zone_id?: string;
    zone?: any;
    expected_value?: any;
    actual_value?: any;
    value_units?: string;
    time: Date;
    lat?: number;
    lng?: number;
    alt?: number;
    angle?: number;
    speed?: number;
    expected?: boolean;
    connected?: boolean;
    online: number;
    offline: number;
    immobile: number;
    freezed: number;
    pressed?: boolean;
    long_pressed?: boolean;
    power_changed?: boolean;
    params?: EventGenerationDataValueV1[];
    events?: EventGenerationDataValueV1[];
    commands?: EventGenerationDataValueV1[];
    states?: EventGenerationDataValueV1[];
    zones?: EventGenerationZoneV1[];
}
