import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("status from props should displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />)
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    })
})