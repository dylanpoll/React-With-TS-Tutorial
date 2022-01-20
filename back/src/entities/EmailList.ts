import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()                  
@Entity()                               
export class EmailList {
  @Field() 
    @PrimaryKey() 
      id!: number;
  
  @Field(() => String)  
    @Property({type: "date" })   
      createdAt: Date = new Date();

  @Field(() => String)  
    @Property({type: "date", onUpdate: () => new Date() })  
      updatedAt: Date = new Date();

  @Field(() => String)  
    @Property({ type: "text", unique: true }) 
      name!: string;   

  @Field(() => String)  
    @Property({ type: "text", unique: true  })  
      email!: string;               

  @Field(() => String)    
    @Property({ type: "text", unique: true }) 
      class!: string;                   
}