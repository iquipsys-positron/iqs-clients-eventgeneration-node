import { EventGenerationZoneV1 } from './EventGenerationZoneV1';
import { EventGenerationDataValueV1 } from './EventGenerationDataValueV1';

export class EventGenerationV1 {
    public org_id: string;
    public organization?: any;

    public object_id: string;
    public object?: any;

    public assign_id?: string;
    public assign?: any;

    public device_id?: string;
    public group_ids?: string[];
    
    public rule_id: string;
    public rule_type: string;
    public rule?: any;
    public zone_id?: string; 
    public zone?: any;
    
    public expected_value?: any;
    public actual_value?: any;
    public value_units?: string;

    public time: Date;
    public lat?: number;
    public lng?: number;
    public alt?: number;
    public angle?: number;
    public speed?: number;

    public expected?: boolean;
    public connected?: boolean;
    public online: number; // In seconds
    public offline: number; // In seconds
    public immobile: number; // In seconds
    public freezed: number; // In seconds
    public pressed?: boolean;
    public long_pressed?: boolean;
    public power_changed?: boolean;

    public params?: EventGenerationDataValueV1[];
    public events?: EventGenerationDataValueV1[];
    public commands?: EventGenerationDataValueV1[];
    public states?: EventGenerationDataValueV1[];
        
    public zones?: EventGenerationZoneV1[];
}