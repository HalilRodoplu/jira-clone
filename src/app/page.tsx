import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
    return (
        <div className="flex flex-col m-2 gap-2">
            <Input placeholder="write smth"/>
            <Button variant="primary" size="xs">Click</Button>
            <Button variant="secondary">Click</Button>
            <Button variant="destructive">Click</Button>
            <Button variant="ghost">Click</Button>
            <Button variant="muted">Click</Button>
            <Button variant="outline">Click</Button>
            <Button variant="teritary">Click</Button>
        </div>
    );
}
